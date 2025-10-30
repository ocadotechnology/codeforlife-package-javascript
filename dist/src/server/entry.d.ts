import { FC } from 'react';
import { Options as CreateEmotionCacheOptions } from '@emotion/cache';
import { DefaultRoutesProps } from './DefaultRoutes';
import { AppProps } from './App';
export type EntryAppProps = Pick<AppProps, "emotionCache" | "children">;
export type EntryKwArgs = {
    App: FC<EntryAppProps>;
    routes: DefaultRoutesProps["children"];
    createEmotionCacheOptions?: CreateEmotionCacheOptions;
};
export declare function server({ App, routes, createEmotionCacheOptions, ...appProps }: EntryKwArgs): Promise<{
    render: (path: string) => {
        html: string;
        head: string;
    };
}>;
export declare function client({ App, routes, createEmotionCacheOptions, ...appProps }: EntryKwArgs): Promise<void>;
