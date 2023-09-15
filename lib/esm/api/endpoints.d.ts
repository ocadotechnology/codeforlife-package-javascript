import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { MutationDefinition } from '@reduxjs/toolkit/query/react';
import { FetchBaseQuery } from './baseQuery';
import { TagTypes } from './tagTypes';
export type LogoutQuery = null;
export type LogoutResult = null;
export default function endpoints<ReducerPath extends string>(build: EndpointBuilder<FetchBaseQuery, any, ReducerPath>): {
    logout: MutationDefinition<LogoutQuery, FetchBaseQuery, TagTypes, LogoutResult, ReducerPath>;
};
