import { Button, type ButtonProps } from "@mui/material"
import type { FC } from "react"
import { Link } from "react-router-dom"

import { type LinkProps } from "../../utils/router"

export type LinkButtonProps = Omit<ButtonProps, "component"> & LinkProps

// https://mui.com/material-ui/integrations/routing/#button
const LinkButton: FC<LinkButtonProps> = props => {
  return <Button {...{ ...props, component: Link }} />
}

export default LinkButton
