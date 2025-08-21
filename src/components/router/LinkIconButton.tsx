import { IconButton, type IconButtonProps } from "@mui/material"
import { Link } from "react-router-dom"
import { type JSX } from "react"

import { type LinkProps } from "../../utils/router"

export type LinkIconButtonProps<
  Override extends "delta" | "to",
  State extends Record<string, any> = Record<string, any>,
> = Omit<IconButtonProps, "component"> & LinkProps<Override, State>

// https://mui.com/material-ui/integrations/routing/#button
const LinkIconButton: {
  (props: LinkIconButtonProps<"delta">): JSX.Element
  <State extends Record<string, any> = Record<string, any>>(
    props: LinkIconButtonProps<"to", State>,
  ): JSX.Element
} = (props: LinkIconButtonProps<"delta"> | LinkIconButtonProps<"to">) => {
  return <IconButton {...{ ...props, component: Link }} />
}

export default LinkIconButton
