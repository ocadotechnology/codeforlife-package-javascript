import { Tab, type TabProps } from "@mui/material"
import { Link } from "react-router-dom"

import { type LinkProps } from "../../utils/router"

export type LinkTabProps<
  Override extends "delta" | "to",
  State extends Record<string, any> = Record<string, any>,
> = Omit<TabProps, "component"> & LinkProps<Override, State>

// https://mui.com/material-ui/integrations/routing/#tabs
const LinkTab: {
  (props: LinkTabProps<"delta">): JSX.Element
  <State extends Record<string, any> = Record<string, any>>(
    props: LinkTabProps<"to", State>,
  ): JSX.Element
} = (props: LinkTabProps<"delta"> | LinkTabProps<"to">) => {
  return <Tab {...{ ...props, component: Link }} />
}

export default LinkTab
