import { type JSX, useEffect } from "react"
import { type To } from "react-router-dom"

import { type NavigateOptions, useNavigate } from "../../hooks"

export type NavigatorProps<
  Override extends "delta" | "to",
  State extends Record<string, any> = Record<string, any>,
> = Override extends "delta"
  ? { delta: number; to?: undefined }
  : { delta?: undefined; to: To } & NavigateOptions<State>

const Navigator: {
  (props: NavigatorProps<"delta">): JSX.Element
  <State extends Record<string, any> = Record<string, any>>(
    props: NavigatorProps<"to", State>,
  ): JSX.Element
} = ({
  delta,
  to,
  ...options
}: NavigatorProps<"delta"> | NavigatorProps<"to">) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (typeof delta === "number") navigate(delta)
    else navigate(to, options)
  }, [navigate, delta, to, options])

  return <></>
}

export default Navigator
