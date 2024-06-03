import type {
  EndpointBuilder,
  MutationDefinition,
} from "@reduxjs/toolkit/query"

import { type FetchBaseQuery } from "./baseQuery"
import { type TagTypes } from "./tagTypes"

export type LogoutQuery = null
export type LogoutResult = null

export default function endpoints<ReducerPath extends string>(
  build: EndpointBuilder<FetchBaseQuery, any, ReducerPath>,
): {
  logout: MutationDefinition<
    LogoutQuery,
    FetchBaseQuery,
    TagTypes,
    LogoutResult,
    ReducerPath
  >
} {
  const _build = build as EndpointBuilder<FetchBaseQuery, TagTypes, ReducerPath>

  return {
    // TODO: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-queryfn
    logout: _build.mutation<LogoutResult, LogoutQuery>({
      query: () => ({
        url: 'session/logout/',
        method: 'GET'
      })
    })
  };
}
