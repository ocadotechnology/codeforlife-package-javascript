import { ListItemProps } from '@mui/material';
import { JSX } from 'react';
import { LinkProps } from '../../utils/router';
export type LinkListItemProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<ListItemProps, "component"> & LinkProps<Override, State>;
declare const LinkListItem: {
    (props: LinkListItemProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: LinkListItemProps<"to", State>): JSX.Element;
};
export default LinkListItem;
