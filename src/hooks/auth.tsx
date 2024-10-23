import Cookies from "js-cookie"
import { useEffect, type ReactNode } from "react"
import { createSearchParams, useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { type AuthFactor, type User } from "../api"
import { SESSION_METADATA_COOKIE_NAME } from "../settings"
import { selectIsLoggedIn } from "../slices/session"

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
