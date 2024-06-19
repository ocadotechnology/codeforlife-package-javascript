import { ListItem, type ListItemProps } from "@mui/material"
import type { FC } from "react"
import { Link, type LinkProps } from "react-router-dom"

export type LinkListItemProps = Omit<ListItemProps, "component"> & LinkProps

// https://mui.com/material-ui/integrations/routing/#list
const LinkListItem: FC<LinkListItemProps> = props => {
  return <ListItem {...{ ...props, component: Link }} />
}

export default LinkListItem
