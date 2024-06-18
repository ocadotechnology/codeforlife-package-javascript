import Cookies from "js-cookie"
import { useEffect, type ReactNode } from "react"
import { createSearchParams, useLocation, useNavigate } from "react-router-dom"

import { type AuthFactor, type User } from "../api"

export interface SessionMetadata {
  user_id: User["id"]
  user_type: "teacher" | "student" | "indy"
  auth_factors: Array<AuthFactor["type"]>
  otp_bypass_token_exists: boolean
}

export function useSessionMetadata(): SessionMetadata | undefined {
  const sessionMetadata = Cookies.get("session_metadata")

  return sessionMetadata
    ? JSON.parse(sessionMetadata.replaceAll("\\054", ",").replaceAll("\\", ""))
    : undefined
}

export function useSessionRequired(
  userType: SessionMetadata["user_type"],
  children: ReactNode | ((sessionMetadata: SessionMetadata) => ReactNode),
  { next }: undefined | { next: boolean } = { next: true },
) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const sessionMetadata = useSessionMetadata()

  useEffect(() => {
    if (!sessionMetadata) {
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
  }, [navigate, sessionMetadata, userType, next, pathname])

  if (!sessionMetadata || sessionMetadata.user_type !== userType) return <></>

  return typeof children === "function" ? children(sessionMetadata) : children
}
