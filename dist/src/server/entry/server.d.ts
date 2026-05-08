import { EntryKwArgs } from './common';
export default function server({ App, routes, catchAllRoute, createEmotionCacheOptions, ...appProps }: EntryKwArgs): Promise<{
    render: (path: string) => {
        html: string;
        head: string;
    };
}>;
