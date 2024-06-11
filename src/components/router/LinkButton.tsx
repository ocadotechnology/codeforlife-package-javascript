import { Button, type ButtonProps } from "@mui/material"
import type { FC } from "react"
import { Link, type LinkProps } from "react-router-dom"

export type LinkButtonProps = Omit<ButtonProps, "component"> & LinkProps

// https://mui.com/material-ui/integrations/routing/#button
const LinkButton: FC<LinkButtonProps> = props => {
  return <Button {...{ ...props, component: Link }} />
}

export default LinkButton
