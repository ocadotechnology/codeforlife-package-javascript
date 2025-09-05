import { LinkProps as LinkProps_2 } from 'react-router-dom';
import { ReactNode } from 'react';
import { To } from 'react-router-dom';

export declare function getParam(path: Path, key: string): string;

export declare type LinkProps<Override extends "delta" | "to", State extends Record<string, any> = Record<string, any>> = Omit<LinkProps_2, "to" | "state"> & (Override extends "delta" ? {
    to: number;
} : {
    to: To;
    state?: State & Partial<PageState>;
});

declare interface NotificationProps {
    open?: boolean;
    error?: boolean;
    onClose?: () => void;
    children: ReactNode;
    bgcolor?: "secondary" | "tertiary";
}

declare type PageState = {
    notifications: Array<{
        index?: number;
        props: NotificationProps;
    }>;
    scroll: {
        x: number;
        y: number;
    };
};

declare type Parameters_2 = Record<string, string>;
export { Parameters_2 as Parameters }

export declare interface Path {
    _: string;
    __: string | Parameters_2;
    [subpath: string]: string | Path | Parameters_2;
}

export declare function path<Subpaths extends Record<string, Path>>(_: string | Parameters_2, subpaths?: Subpaths): Path & Subpaths;

export declare type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};

export { }
