import { Children, useEffect, type ReactNode } from "react"
import {
  createSearchParams,
  useLocation,
  useNavigate,
  type Location,
} from "react-router-dom"

import { useSessionMetadata, type SessionMetadata } from "../../hooks/auth"
import Notification, { type NotificationProps } from "./Notification"

export type PageState = {
  notifications: Array<{
    index?: number
    props: NotificationProps
  }>
}

type PageChildrenFunction<SessionRequired extends boolean> = (
  sessionMetadata: SessionRequired extends true
    ? SessionMetadata
    : SessionMetadata | undefined,
) => ReactNode

export interface PageProps<
  SessionUserType extends SessionMetadata["user_type"] | undefined,
> {
  sessionUserType?: SessionUserType
  children:
    | ReactNode
    | (SessionUserType extends undefined
        ? PageChildrenFunction<false>
        : PageChildrenFunction<true>)
  next?: boolean
}

const Page = <
  SessionUserType extends SessionMetadata["user_type"] | undefined = undefined,
>({
  sessionUserType,
  children,
  next = true,
}: PageProps<SessionUserType>): JSX.Element => {
  const { pathname, state } = useLocation() as Location<unknown>
  const sessionMetadata = useSessionMetadata()
  const navigate = useNavigate()

  const loginRequired =
    sessionUserType &&
    (!sessionMetadata || sessionMetadata.user_type !== sessionUserType)

  useEffect(() => {
    if (loginRequired) {
      navigate({
        pathname:
          "/login" +
          {
            teacher: "/teacher",
            student: "/student",
            indy: "/independent",
          }[sessionUserType],
        search: next
          ? createSearchParams({ next: pathname }).toString()
          : undefined,
      })
    }
  }, [loginRequired, sessionUserType, pathname, navigate, next])

  if (loginRequired) return <></>

  if (typeof children === "function") {
    children = sessionMetadata
      ? (children as PageChildrenFunction<true>)(sessionMetadata)
      : (children as PageChildrenFunction<false>)(sessionMetadata)
  }

  const childrenArray = Children.toArray(children)

  if (
    typeof state === "object" &&
    state !== null &&
    "notifications" in state &&
    Array.isArray(state.notifications) &&
    state.notifications.every(
      (notification: unknown) =>
        typeof notification === "object" &&
        notification !== null &&
        "props" in notification,
    )
  ) {
    ;(state.notifications as PageState["notifications"]).forEach(
      (notification, index) => {
        childrenArray.splice(
          notification.index ?? index,
          0,
          <Notification {...notification.props} />,
        )
      },
    )
  }

  return <>{childrenArray}</>
}

export default Page
