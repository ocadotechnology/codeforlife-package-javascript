import { JSX } from 'react';
import { To } from 'react-router';
import { NavigateOptions } from '../../hooks';
export type NavigateProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Override extends "delta" ? {
    delta: number;
    to?: undefined;
} : {
    delta?: undefined;
    to: To;
} & NavigateOptions<State>;
declare const Navigate: {
    (props: NavigateProps<"delta">): JSX.Element;
    <State extends Record<string, any> = Record<string, any>>(props: NavigateProps<"to", State>): JSX.Element;
};
export default Navigate;
