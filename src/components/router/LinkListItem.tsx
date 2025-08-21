import { ListItem, type ListItemProps } from "@mui/material"
import { type JSX } from "react"
import { Link } from "react-router-dom"

import { type LinkProps } from "../../utils/router"

export type LinkListItemProps<
  Override extends "delta" | "to",
  State extends Record<string, any> = Record<string, any>,
> = Omit<ListItemProps, "component"> & LinkProps<Override, State>

// https://mui.com/material-ui/integrations/routing/#list
const LinkListItem: {
  (props: LinkListItemProps<"delta">): JSX.Element
  <State extends Record<string, any> = Record<string, any>>(
    props: LinkListItemProps<"to", State>,
  ): JSX.Element
} = (props: LinkListItemProps<"delta"> | LinkListItemProps<"to">) => {
  return <ListItem {...{ ...props, component: Link }} />
}

export default LinkListItem
