import { To, LinkProps as _LinkProps } from 'react-router';
import { PageState } from '../components/page/Page';
export type LinkProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<_LinkProps, "to" | "state"> & (Override extends "delta" ? {
    to: number;
} : {
    to: To;
    state?: State & Partial<PageState>;
});
export type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};
export type Parameters = Record<string, string>;
export interface Path {
    _: string;
    __: string | Parameters;
    [subpath: string]: string | Path | Parameters;
}
export declare function path<Subpaths extends Record<string, Path>>(_: string | Parameters, subpaths?: Subpaths): Path & Subpaths;
export declare function getParam(path: Path, key: string): string;
