import { IconButton, type IconButtonProps } from "@mui/material"
import type { FC } from "react"
import { Link, type LinkProps } from "react-router-dom"

export type LinkIconButtonProps = Omit<IconButtonProps, "component"> & LinkProps

// https://mui.com/material-ui/integrations/routing/#button
const LinkIconButton: FC<LinkIconButtonProps> = props => {
  return <IconButton {...{ ...props, component: Link }} />
}

export default LinkIconButton
