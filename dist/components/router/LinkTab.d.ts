import { TabProps } from '@mui/material';
import { JSX } from 'react';
import { LinkProps } from '../../utils/router';
export type LinkTabProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<TabProps, "component"> & LinkProps<Override, State>;
declare const LinkTab: {
    (props: LinkTabProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: LinkTabProps<"to", State>): JSX.Element;
};
export default LinkTab;
