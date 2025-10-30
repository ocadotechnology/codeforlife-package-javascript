import { IconButtonProps } from '@mui/material';
import { JSX } from 'react';
import { LinkProps } from '../../utils/router';
export type LinkIconButtonProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<IconButtonProps, "component"> & LinkProps<Override, State>;
declare const LinkIconButton: {
    (props: LinkIconButtonProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: LinkIconButtonProps<"to", State>): JSX.Element;
};
export default LinkIconButton;
