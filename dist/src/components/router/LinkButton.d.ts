import { ButtonProps } from '@mui/material';
import { JSX } from 'react';
import { LinkProps } from '../../utils/router';
export type LinkButtonProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<ButtonProps, "component"> & LinkProps<Override, State>;
declare const LinkButton: {
    (props: LinkButtonProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: LinkButtonProps<"to", State>): JSX.Element;
};
export default LinkButton;
