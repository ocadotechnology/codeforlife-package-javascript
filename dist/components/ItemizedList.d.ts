import { FC, ReactElement } from 'react';
import { ListItem, ListItemText, ListProps } from '@mui/material';
type ListItemElement = ReactElement<typeof ListItem | typeof ListItemText> | string;
export interface ItemizedListProps {
    styleType: "unset" | "initial" | "inherit" | "upper-roman" | "upper-latin" | "upper-alpha" | "square" | "none" | "lower-roman" | "lower-latin" | "lower-greek" | "lower-alpha" | "georgian" | "disc" | "decimal-leading-zero" | "decimal" | "armenian" | "circle";
    listProps?: ListProps;
    pl?: number;
    children: ListItemElement | ListItemElement[];
}
declare const ItemizedList: FC<ItemizedListProps>;
export default ItemizedList;
