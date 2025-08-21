import { Button, type ButtonProps } from "@mui/material"
import { type JSX } from "react"
import { Link } from "react-router-dom"

import { type LinkProps } from "../../utils/router"

export type LinkButtonProps<
  Override extends "delta" | "to",
  State extends Record<string, any> = Record<string, any>,
> = Omit<ButtonProps, "component"> & LinkProps<Override, State>

// https://mui.com/material-ui/integrations/routing/#button
const LinkButton: {
  (props: LinkButtonProps<"delta">): JSX.Element
  <State extends Record<string, any> = Record<string, any>>(
    props: LinkButtonProps<"to", State>,
  ): JSX.Element
} = (props: LinkButtonProps<"delta"> | LinkButtonProps<"to">) => {
  return <Button {...{ ...props, component: Link }} />
}

export default LinkButton
