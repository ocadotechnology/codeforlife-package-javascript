import { Tab, type TabProps } from "@mui/material"
import type { FC } from "react"
import { Link } from "react-router-dom"

import { type LinkProps } from "../../utils/router"

export type LinkTabProps = Omit<TabProps, "component"> & LinkProps

// https://mui.com/material-ui/integrations/routing/#tabs
const LinkTab: FC<LinkTabProps> = props => {
  return <Tab {...{ ...props, component: Link }} />
}

export default LinkTab
