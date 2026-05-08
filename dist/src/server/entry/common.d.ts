import { Options as CreateEmotionCacheOptions } from '@emotion/cache';
import { FC } from 'react';
import { AppProps } from '../App';
import { DefaultRoutesProps } from '../DefaultRoutes';
import { EmotionCache } from '@emotion/utils';
/**
 * Creates a new Emotion cache instance.
 */
export declare function createEmotionCache({ key, // ensures all styles are generated with this prefix
prepend, // loads MUI-styles first so we can override them easily
...otherOptions }?: CreateEmotionCacheOptions): EmotionCache;
export type EntryAppProps = Pick<AppProps, "emotionCache" | "children">;
export type EntryKwArgs = {
    App: FC<EntryAppProps>;
    routes: DefaultRoutesProps["children"];
    catchAllRoute?: DefaultRoutesProps["catchAll"];
    createEmotionCacheOptions?: CreateEmotionCacheOptions;
};
export declare const DEFAULT_CATCH_ALL: DefaultRoutesProps["catchAll"];
