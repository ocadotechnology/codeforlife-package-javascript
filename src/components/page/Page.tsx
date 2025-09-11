import { Children, type JSX, useEffect } from "react"
import { type Location, useLocation } from "react-router"

import Notification, { type NotificationProps } from "./Notification"
import {
  type SessionMetadata,
  type UseSessionChildren,
  type UseSessionChildrenFunction,
  type UseSessionOptions,
  useSession,
} from "../../hooks/auth"

export type PageState = {
  notifications: Array<{
    index?: number
    props: NotificationProps
  }>
  scroll: { x: number; y: number }
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
  const { state } = useLocation() as Location<null | Partial<PageState>>

  let { scroll, notifications } = state || {}
  scroll = scroll || { x: 0, y: 0 }
  notifications = notifications || []

  useEffect(() => {
    window.scroll(scroll.x, scroll.y)
  }, [scroll.x, scroll.y])

  return (
    <>
      {useSession((metadata?: SessionMetadata) => {
        if (typeof children === "function") {
          children = metadata
            ? (children as UseSessionChildrenFunction<true>)(metadata)
            : (children as UseSessionChildrenFunction<false>)(metadata)
        }

        if (notifications.length) {
          const childrenArray = Children.toArray(children)

          notifications.forEach((notification, index) => {
            void childrenArray.splice(
              notification.index ?? index,
              0,
              <Notification {...notification.props} />,
            )
          })

          return childrenArray
        }

        return children
      }, session)}
    </>
  )
}

export default Page
