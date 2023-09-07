import { reactHooksModuleName } from '@reduxjs/toolkit/dist/query/react/module';
import { Api, BaseQueryFn, CreateApiOptions, EndpointDefinitions, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
type FetchBaseQuery = BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>;
type GlobalTagTypes = ('user' | 'school' | 'class' | 'teacher' | 'student');
export default function createApi<Definitions extends EndpointDefinitions, ReducerPath extends string = 'api', TagTypes extends string = never>({ reducerPath, baseQuery, endpoints, tagTypes, ...otherOptions }: Partial<CreateApiOptions<FetchBaseQuery, Definitions, ReducerPath, TagTypes | GlobalTagTypes>>): Api<FetchBaseQuery, Definitions, ReducerPath, TagTypes | GlobalTagTypes, (typeof import('@reduxjs/toolkit/dist/query/core/module').coreModuleName | typeof reactHooksModuleName)>;
export {};
