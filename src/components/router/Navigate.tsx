import { useEffect, type JSX } from "react"
import { type To } from "react-router-dom"

import { useNavigate, type NavigateOptions } from "../../hooks"

export type NavigateProps<
  Override extends "delta" | "to",
  State extends Record<string, any> = Record<string, any>,
> = Override extends "delta"
  ? { delta: number; to?: undefined }
  : { delta?: undefined; to: To } & NavigateOptions<State>

const Navigate: {
  (props: NavigateProps<"delta">): JSX.Element
  <State extends Record<string, any> = Record<string, any>>(
    props: NavigateProps<"to", State>,
  ): JSX.Element
} = ({
  delta,
  to,
  ...options
}: NavigateProps<"delta"> | NavigateProps<"to">) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (typeof delta === "number") navigate(delta)
    else navigate(to, options)
  }, [navigate, delta, to, options])

  return <></>
}

export default Navigate
