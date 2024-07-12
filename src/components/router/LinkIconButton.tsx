import { IconButton, type IconButtonProps } from "@mui/material"
import type { FC } from "react"
import { Link } from "react-router-dom"

import { type LinkProps } from "../../utils/router"

export type LinkIconButtonProps = Omit<IconButtonProps, "component"> & LinkProps

// https://mui.com/material-ui/integrations/routing/#button
const LinkIconButton: FC<LinkIconButtonProps> = props => {
  return <IconButton {...{ ...props, component: Link }} />
}

export default LinkIconButton
