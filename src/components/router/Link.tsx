import { Link as MuiLink, type LinkProps as MuiLinkProps } from "@mui/material"
import type { FC } from "react"
import {
  Link as RouterLink,
  type LinkProps as RouterLinkProps,
} from "react-router-dom"

export type LinkProps = Omit<MuiLinkProps, "component"> & RouterLinkProps

// https://mui.com/material-ui/integrations/routing/#link
const Link: FC<LinkProps> = props => {
  return <MuiLink component={RouterLink} {...props} />
}

export default Link
