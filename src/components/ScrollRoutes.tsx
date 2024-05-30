import React from "react"
import { Routes, RoutesProps, useLocation } from "react-router-dom"

export interface ScrollRoutesProps extends RoutesProps {
  x?: number
  y?: number
}

const ScrollRoutes: React.FC<ScrollRoutesProps> = ({
  x = 0,
  y = 0,
  ...routesProps
}) => {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scroll(x, y)
  }, [pathname])

  return <Routes {...routesProps} />
}

export default ScrollRoutes
