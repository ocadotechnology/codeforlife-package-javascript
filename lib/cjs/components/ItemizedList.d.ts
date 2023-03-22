import React from 'react';
import { ListProps, ListItem } from '@mui/material';
type ListItemElement = React.ReactElement<typeof ListItem>;
export interface ItemizedListProps {
    styleType: ('unset' | 'initial' | 'inherit' | 'upper-roman' | 'upper-latin' | 'upper-alpha' | 'square' | 'none' | 'lower-roman' | 'lower-latin' | 'lower-greek' | 'lower-alpha' | 'georgian' | 'disc' | 'decimal-leading-zero' | 'decimal' | 'armenian' | 'circle');
    listProps?: ListProps;
    pl?: number;
    children: ListItemElement | ListItemElement[];
}
declare const ItemizedList: React.FC<ItemizedListProps>;
export default ItemizedList;
