import { EntryKwArgs } from './common';
export declare function server({ App, routes, catchAllRoute, createEmotionCacheOptions, ...appProps }: EntryKwArgs): Promise<{
    render: (path: string) => {
        html: string;
        head: string;
    };
}>;
