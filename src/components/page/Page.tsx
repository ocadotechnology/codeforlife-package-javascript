import { Children } from "react"

import {
  useSession,
  type SessionMetadata,
  type UseSessionChildren,
  type UseSessionChildrenFunction,
  type UseSessionOptions,
} from "../../hooks/auth"
import { useLocation } from "../../hooks/router"
import Notification, { type NotificationProps } from "./Notification"

export type PageState = {
  notifications: Array<{
    index?: number
    props: NotificationProps
  }>
}

export interface PageProps<
  SessionUserType extends SessionMetadata["user_type"] | undefined,
> {
  children: UseSessionChildren<SessionUserType>
  session?: UseSessionOptions<SessionUserType>
}

const Page = <
  SessionUserType extends SessionMetadata["user_type"] | undefined = undefined,
>({
  children,
  session,
}: PageProps<SessionUserType>): JSX.Element => {
  const { state } = useLocation()

  return (
    <>
      {useSession((metadata?: SessionMetadata) => {
        if (typeof children === "function") {
          children = metadata
            ? (children as UseSessionChildrenFunction<true>)(metadata)
            : (children as UseSessionChildrenFunction<false>)(metadata)
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

        return childrenArray
      }, session)}
    </>
  )
}

export default Page
