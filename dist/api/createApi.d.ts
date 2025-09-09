import { Api, BaseQueryApi, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, MutationDefinition, QueryReturnValue, coreModuleName, reactHooksModuleName } from '@reduxjs/toolkit/query/react';
import { TagTypes as DefaultTagTypes } from './tagTypes';
export default function createApi<TagTypes extends string = never>({ tagTypes, }?: {
    tagTypes?: readonly TagTypes[];
}): Api<(args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>>, {
    logout: MutationDefinition<null, any, any, null, any, any>;
}, "api", TagTypes | DefaultTagTypes, typeof coreModuleName | typeof reactHooksModuleName>;
