import { Children, type ReactNode } from "react"
import {
  createSearchParams,
  useLocation,
  type Location,
} from "react-router-dom"

import {
  useNavigate,
  useSessionMetadata,
  type SessionMetadata,
} from "../../hooks"
import Notification, { type NotificationProps } from "./Notification"

export type PageState = {
  notifications: Array<{
    index?: number
    props: NotificationProps
  }>
}

type PageChildrenFunction<Auth extends boolean> = (
  sessionMetadata: Auth extends false
    ? SessionMetadata | undefined
    : SessionMetadata,
) => ReactNode

export interface PageProps<Auth extends boolean> {
  auth?: Auth
  children?: ReactNode | PageChildrenFunction<Auth>
}

const Page = <Auth extends boolean>({
  auth,
  children,
}: PageProps<Auth>): JSX.Element => {
  const { pathname, state } = useLocation() as Location<unknown>
  const sessionMetadata = useSessionMetadata()
  const navigate = useNavigate()

  if (auth) {
    if (!sessionMetadata) {
      navigate({
        pathname: "/login",
        search: createSearchParams({ next: pathname }).toString(),
      })
      return <></>
    }

    if (typeof children === "function") {
      children = (children as PageChildrenFunction<true>)(sessionMetadata)
    }
  } else if (typeof children === "function") {
    children = (children as PageChildrenFunction<false>)(sessionMetadata)
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
