import { Unstable_Grid2 as Grid, Grid2Props } from "@mui/material"
import React from "react"
import { useLocation } from "react-router-dom"

import Notification, { NotificationProps } from "./Notification"

export interface ContainerState {
  notifications?: Array<{
    index?: number
    props: NotificationProps
  }>
}

export interface ContainerProps extends Omit<Grid2Props, "id" | "container"> {}

const Container: React.FC<ContainerProps> = ({
  children,
  ...otherGridProps
}) => {
  const location = useLocation()
  const childrenArray = React.Children.toArray(children)

  if (location.state !== null) {
    const state: ContainerState = location.state

    if (Array.isArray(state.notifications)) {
      state.notifications
        .filter(notification => "props" in notification)
        .forEach((notification, index) => {
          childrenArray.splice(
            notification.index ?? index,
            0,
            <Notification {...notification.props} />,
          )
        })
    }
  }

  return (
    <Grid id="body" container {...otherGridProps}>
      {childrenArray}
    </Grid>
  )
}

export default Container
