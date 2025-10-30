import { LinkProps as MuiLinkProps } from '@mui/material';
import { JSX } from 'react';
import { LinkProps as RouterLinkProps } from '../../utils/router';
export type LinkProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<MuiLinkProps, "component"> & RouterLinkProps<Override, State>;
declare const Link: {
    (props: LinkProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: LinkProps<"to", State>): JSX.Element;
};
export default Link;
