import { type FC, useEffect } from "react"
import { Routes, type RoutesProps } from "react-router-dom"

import { useLocation } from "../../hooks/router"

export interface ScrollRoutesState {
  scroll: { x: number; y: number }
}

export interface ScrollRoutesProps extends RoutesProps {}

const ScrollRoutes: FC<ScrollRoutesProps> = props => {
  const { pathname, state } = useLocation<ScrollRoutesState>()

  let { scroll } = state || {}
  scroll = scroll || { x: 0, y: 0 }

  useEffect(() => {
    window.scroll(scroll.x, scroll.y)
  }, [pathname, scroll.x, scroll.y])

  return <Routes {...props} />
}

export default ScrollRoutes
