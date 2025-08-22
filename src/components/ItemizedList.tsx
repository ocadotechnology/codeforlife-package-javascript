import { type FC, type ReactElement } from "react"
import {
  List,
  type ListItem,
  type ListItemText,
  type ListProps,
} from "@mui/material"

type ListItemElement =
  | ReactElement<typeof ListItem | typeof ListItemText>
  | string

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

const ItemizedList: FC<ItemizedListProps> = ({
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
