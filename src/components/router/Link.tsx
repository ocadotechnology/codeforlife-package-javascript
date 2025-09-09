import { Link as MuiLink, type LinkProps as MuiLinkProps } from "@mui/material"
import { type JSX } from "react"
import { Link as RouterLink } from "react-router"

import { type LinkProps as RouterLinkProps } from "../../utils/router"

export type LinkProps<
  Override extends "delta" | "to",
  State extends Record<string, any> = Record<string, any>,
> = Omit<MuiLinkProps, "component"> & RouterLinkProps<Override, State>

// https://mui.com/material-ui/integrations/routing/#link
const Link: {
  (props: LinkProps<"delta">): JSX.Element
  <State extends Record<string, any> = Record<string, any>>(
    props: LinkProps<"to", State>,
  ): JSX.Element
} = (props: LinkProps<"delta"> | LinkProps<"to">) => {
  // @ts-expect-error props are assignable
  return <MuiLink component={RouterLink} {...props} />
}

export default Link
