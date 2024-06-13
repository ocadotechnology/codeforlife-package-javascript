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

export interface PageProps<LoginPath extends string | undefined> {
  loginPath?: LoginPath
  children:
    | ReactNode
    | (LoginPath extends undefined
        ? PageChildrenFunction<false>
        : PageChildrenFunction<true>)
  next?: boolean
}

const Page = <LoginPath extends string | undefined = undefined>({
  loginPath,
  children,
  next = true,
}: PageProps<LoginPath>): JSX.Element => {
  const { pathname, state } = useLocation() as Location<unknown>
  const sessionMetadata = useSessionMetadata()
  const navigate = useNavigate()

  const loginRequired = loginPath && !sessionMetadata

  useEffect(() => {
    if (loginRequired) {
      navigate({
        pathname: loginPath,
        search: next
          ? createSearchParams({ next: pathname }).toString()
          : undefined,
      })
    }
  }, [loginRequired, loginPath, pathname, navigate, next])

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
