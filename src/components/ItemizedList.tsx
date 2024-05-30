import React from "react"
import { List, ListProps, ListItem, ListItemText } from "@mui/material"

type ListItemElement = React.ReactElement<typeof ListItem | typeof ListItemText>

export interface ItemizedListProps {
  styleType:
    | "unset"
    | "initial"
    | "inherit"
    | "upper-roman"
    | "upper-latin"
    | "upper-alpha"
    | "square"
    | "none"
    | "lower-roman"
    | "lower-latin"
    | "lower-greek"
    | "lower-alpha"
    | "georgian"
    | "disc"
    | "decimal-leading-zero"
    | "decimal"
    | "armenian"
    | "circle"
  listProps?: ListProps
  pl?: number
  children: ListItemElement | ListItemElement[]
}

const ItemizedList: React.FC<ItemizedListProps> = ({
  styleType,
  listProps = {},
  pl = 4,
  children,
}) => {
  const { sx, ...otherProps } = listProps
  const listItemProps = { display: "list-item" }

  return (
    <List
      sx={{
        listStyleType: styleType,
        pl,
        ".MuiListItem-root": listItemProps,
        ".MuiListItemText-root": listItemProps,
        ...sx,
      }}
      {...otherProps}
    >
      {children}
    </List>
  )
}

export default ItemizedList
