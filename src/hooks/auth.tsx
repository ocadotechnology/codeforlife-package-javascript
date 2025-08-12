import * as yup from "yup"
import Cookies from "js-cookie"
import { useEffect, useState, useCallback, type ReactNode } from "react"
import { createSearchParams } from "react-router-dom"
import type { TypedUseMutation } from "@reduxjs/toolkit/query/react"
import { useSelector } from "react-redux"

import { type AuthFactor, type User } from "../api"
import { generateSecureRandomString } from "../utils/general"
import {
  makeOAuth2StorageKey,
  generateOAuth2CodeChallenge,
  type OAuth2CodeChallengeLengths,
  type OAuth2CodeChallenge,
  type OAuth2RequestCodeUrlSearchParams,
  type OAuth2ReceiveCodeUrlSearchParams,
} from "../utils/auth"
import {
  type ExchangeOAuth2CodeResult,
  type ExchangeOAuth2CodeArg,
} from "../api/endpoints/session"
import { useSearchParams, useLocation, useNavigate } from "./router"
import { SESSION_METADATA_COOKIE_NAME } from "../settings"
import { selectIsLoggedIn } from "../slices/session"

// -----------------------------------------------------------------------------
// Session
// -----------------------------------------------------------------------------

export interface SessionMetadata {
  user_id: User["id"]
  user_type: "teacher" | "student" | "indy"
  auth_factors: Array<AuthFactor["type"]>
  otp_bypass_token_exists: boolean
}

export function useSessionMetadata(): SessionMetadata | undefined {
  return useSelector(selectIsLoggedIn)
    ? (JSON.parse(
        Cookies.get(SESSION_METADATA_COOKIE_NAME)!,
      ) as SessionMetadata)
    : undefined
}

export type UseSessionChildrenFunction<Required extends boolean> = (
  metadata: Required extends true
    ? SessionMetadata
    : SessionMetadata | undefined,
) => ReactNode

export type UseSessionChildren<
  UserType extends SessionMetadata["user_type"] | undefined,
> =
  | ReactNode
  | (UserType extends undefined
      ? UseSessionChildrenFunction<false>
      : UseSessionChildrenFunction<true>)

export type UseSessionOptions<
  UserType extends SessionMetadata["user_type"] | undefined,
> = Partial<{
  userType: UserType
  next: boolean
}>

export function useSession<
  UserType extends SessionMetadata["user_type"] | undefined = undefined,
>(
  children: UseSessionChildren<UserType>,
  options: UseSessionOptions<UserType> = {},
) {
  const { userType, next = true } = options

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const sessionMetadata = useSessionMetadata()

  const loginRequired =
    userType && (!sessionMetadata || sessionMetadata.user_type !== userType)

  useEffect(() => {
    if (loginRequired) {
      navigate({
        pathname:
          "/login" +
          {
            teacher: "/teacher",
            student: "/student",
            indy: "/independent",
          }[userType],
        search: next
          ? createSearchParams({ next: pathname }).toString()
          : undefined,
      })
    }
  }, [navigate, loginRequired, userType, next, pathname])

  if (loginRequired) return <></>

  if (typeof children === "function") {
    return sessionMetadata
      ? (children as UseSessionChildrenFunction<true>)(sessionMetadata)
      : (children as UseSessionChildrenFunction<false>)(sessionMetadata)
  }

  return children
}

// -----------------------------------------------------------------------------
// OAuth2
// -----------------------------------------------------------------------------

export function useOAuth2State(
  provider: string,
  length: number = 32,
  storageKey: string = "state",
): [string | undefined, () => void] {
  const oAuth2StorageKey = makeOAuth2StorageKey(provider, storageKey)
  const storageValue = sessionStorage.getItem(oAuth2StorageKey)

  const [_state, _setState] = useState<string>()

  useEffect(() => {
    let state: string
    if (storageValue && storageValue.length === length) {
      state = storageValue
    } else {
      state = generateSecureRandomString(length)
      sessionStorage.setItem(oAuth2StorageKey, state)
    }

    _setState(state)
  }, [oAuth2StorageKey, storageValue, length])

  const resetState = useCallback(() => {
    sessionStorage.removeItem(oAuth2StorageKey)
    _setState(undefined)
  }, [oAuth2StorageKey])

  return [_state, resetState]
}

export function useOAuth2CodeChallenge(
  provider: string,
  length: OAuth2CodeChallengeLengths = 128,
  storageKey: string = "codeChallenge",
): [OAuth2CodeChallenge | undefined, () => void] {
  const oAuth2StorageKey = makeOAuth2StorageKey(provider, storageKey)
  const storageValue = sessionStorage.getItem(oAuth2StorageKey)

  const [_codeChallenge, _setCodeChallenge] = useState<OAuth2CodeChallenge>()

  useEffect(() => {
    let codeChallenge: OAuth2CodeChallenge | undefined
    if (storageValue) {
      const storageJsonValue: unknown = JSON.parse(storageValue)
      if (
        typeof storageJsonValue === "object" &&
        storageJsonValue &&
        "verifier" in storageJsonValue &&
        typeof storageJsonValue.verifier == "string" &&
        storageJsonValue.verifier.length === length &&
        "challenge" in storageJsonValue &&
        typeof storageJsonValue.challenge === "string" &&
        "method" in storageJsonValue &&
        storageJsonValue.method === "S256"
      ) {
        codeChallenge = {
          verifier: storageJsonValue.verifier,
          challenge: storageJsonValue.challenge,
          method: storageJsonValue.method,
        }
      }
    }

    if (codeChallenge) _setCodeChallenge(codeChallenge)
    else {
      generateOAuth2CodeChallenge(length)
        .then(codeChallenge => {
          sessionStorage.setItem(
            oAuth2StorageKey,
            JSON.stringify(codeChallenge),
          )

          _setCodeChallenge(codeChallenge)
        })
        .catch(error => {
          if (error) console.error(error)
        })
    }
  }, [oAuth2StorageKey, storageValue, length])

  const resetCodeChallenge = useCallback(() => {
    sessionStorage.removeItem(oAuth2StorageKey)
    _setCodeChallenge(undefined)
  }, [oAuth2StorageKey])

  return [_codeChallenge, resetCodeChallenge]
}

export interface UseOAuth2KwArgs<
  ResultType = ExchangeOAuth2CodeResult,
  QueryArgExtra = {},
> {
  provider: string
  authUri: string
  clientId: string
  redirectUri: string
  scope: string
  responseType?: "code"
  accessType?: "offline"
  prompt?: string
  argExtra?: QueryArgExtra
  useLoginMutation: TypedUseMutation<
    ResultType,
    ExchangeOAuth2CodeArg & QueryArgExtra,
    any
  >
  onCreateSession: (result: ResultType) => void
  onRetrieveSession: (metadata: SessionMetadata) => void
}

export type OAuth2 = [string, OAuth2RequestCodeUrlSearchParams] | []

// https://datatracker.ietf.org/doc/html/rfc7636
export function useOAuth2<
  ResultType = ExchangeOAuth2CodeResult,
  QueryArgExtra = {},
>({
  provider,
  authUri,
  clientId,
  redirectUri,
  scope,
  responseType = "code",
  accessType = "offline",
  prompt,
  argExtra = {} as QueryArgExtra,
  useLoginMutation,
  onCreateSession,
  onRetrieveSession,
}: UseOAuth2KwArgs<ResultType, QueryArgExtra>): OAuth2 {
  const [state, resetState] = useOAuth2State(provider)
  const [
    {
      verifier: codeVerifier,
      challenge: codeChallenge,
      method: codeChallengeMethod,
    } = {},
    resetCodeChallenge,
  ] = useOAuth2CodeChallenge(provider)
  const [login, { isLoading, isError }] = useLoginMutation()
  const sessionMetadata = useSessionMetadata()
  const navigate = useNavigate()
  const searchParams =
    useSearchParams({ code: yup.string(), state: yup.string() }) || {}
  const location = useLocation<OAuth2ReceiveCodeUrlSearchParams>()

  const locationState = location.state || {}

  useEffect(() => {
    if (sessionMetadata) onRetrieveSession(sessionMetadata)
    else if (searchParams.code && searchParams.state) {
      navigate<OAuth2ReceiveCodeUrlSearchParams>(".", {
        replace: true,
        next: false,
        state: { code: searchParams.code, state: searchParams.state },
      })
    } else if (
      state &&
      codeVerifier &&
      locationState.code &&
      locationState.state === state &&
      !isLoading &&
      !isError
    ) {
      login({
        code: locationState.code,
        code_verifier: codeVerifier,
        redirect_uri: redirectUri,
        ...argExtra,
      })
        .unwrap()
        .then(onCreateSession)
        .catch(() => {
          navigate(".", {
            replace: true,
            state: {
              notifications: [
                {
                  props: {
                    error: true,
                    children: "Failed to login. Please try again.",
                  },
                },
              ],
            },
          })
        })
        .finally(() => {
          resetState()
          resetCodeChallenge()
        })
    }
  }, [
    sessionMetadata,
    navigate,
    redirectUri,
    // State
    state,
    searchParams.state,
    locationState.state,
    resetState,
    // Code
    codeVerifier,
    searchParams.code,
    locationState.code,
    resetCodeChallenge,
    // Login
    argExtra,
    login,
    isLoading,
    isError,
    onCreateSession,
    onRetrieveSession,
  ])

  if (state && codeChallenge && codeChallengeMethod) {
    const urlSearchParams: OAuth2RequestCodeUrlSearchParams = {
      client_id: clientId,
      redirect_uri: redirectUri,
      scope,
      response_type: responseType,
      access_type: accessType,
      state,
      code_challenge: codeChallenge,
      code_challenge_method: codeChallengeMethod,
    }

    if (prompt) urlSearchParams["prompt"] = prompt

    return [
      authUri + "?" + new URLSearchParams(urlSearchParams).toString(),
      urlSearchParams,
    ]
  }

  return []
}
