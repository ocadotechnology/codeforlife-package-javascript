import {
  reactHooksModuleName
} from '@reduxjs/toolkit/dist/query/react/module';
import {
  Api,
  BaseQueryFn,
  CreateApiOptions,
  EndpointDefinitions,
  FetchArgs,
  FetchBaseQueryError,
  QueryDefinition,
  createApi as _createApi
} from '@reduxjs/toolkit/query/react';

import _baseQuery from './baseQuery';

type FetchBaseQuery = BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError>;
type GlobalTagTypes = (
  'user' |
  'school' |
  'class' |
  'teacher' |
  'student'
);

export function createApi<
  Definitions extends EndpointDefinitions,
  ReducerPath extends string = 'api',
  TagTypes extends string = never
>({
  reducerPath = 'api' as ReducerPath,
  baseQuery = _baseQuery,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  endpoints = () => ({}) as Definitions,
  tagTypes = [],
  ...otherOptions
}: Partial<CreateApiOptions<
  FetchBaseQuery,
  Definitions,
  ReducerPath,
  TagTypes | GlobalTagTypes
>>): Api<
  FetchBaseQuery,
  Definitions & {
    getCsrfCookie: QueryDefinition<
      null,
      FetchBaseQuery,
      TagTypes | GlobalTagTypes,
      null,
      ReducerPath
    >;
  },
  ReducerPath,
  TagTypes | GlobalTagTypes,
  (
    typeof import('@reduxjs/toolkit/dist/query/core/module').coreModuleName |
    typeof reactHooksModuleName
  )
> {
  return _createApi({
    reducerPath,
    baseQuery,
    tagTypes: [
      ...tagTypes,
      'user',
      'school',
      'class',
      'teacher',
      'student'
    ],
    endpoints: (build) => ({
      ...endpoints(build),
      getCsrfCookie: build.query<null, null>({
        query: () => ({
          url: 'csrf/cookie/',
          method: 'GET'
        }),
        providesTags: ['user']
      })
    }),
    ...otherOptions
  });
};
