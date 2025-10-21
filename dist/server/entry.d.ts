import { ReactNode } from 'react';
import { Options as CreateEmotionCacheOptions } from '@emotion/cache';
import { AppProps } from './App';
export type EntryKwArgs = Omit<AppProps, "emotionCache" | "children"> & {
    routes: ReactNode;
    createEmotionCacheOptions?: CreateEmotionCacheOptions;
};
export declare function server({ routes, createEmotionCacheOptions, ...appProps }: EntryKwArgs): {
    render: (path: string) => {
        html: string;
        head: string;
    };
};
export declare function client({ routes, createEmotionCacheOptions, ...appProps }: EntryKwArgs): void;
