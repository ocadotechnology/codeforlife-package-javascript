import { type EndpointBuilder } from "@reduxjs/toolkit/query/react"

import {
  buildUrl,
  tagData,
  type ListArg as _ListArg,
  type ListResult as _ListResult,
} from "../../utils/api"
import type { AuthFactor } from "../models"
import { type TagTypes } from "../tagTypes"
import urls from "../urls"

export const AUTH_FACTOR_TAG: TagTypes = "AuthFactor"

export type ListAuthFactorsResult = _ListResult<AuthFactor, "type">
export type ListAuthFactorsArg = _ListArg

export default function getReadAuthFactorEndpoints<
  ListResult extends _ListResult<AuthFactor> = ListAuthFactorsResult,
  ListArg extends _ListArg<AuthFactor> = ListAuthFactorsArg,
>(build: EndpointBuilder<any, any, any>) {
  return {
    listAuthFactors: build.query<ListResult, ListArg>({
      query: search => ({
        url: buildUrl(urls.authFactor.list, { search }),
        method: "GET",
      }),
      providesTags: tagData(AUTH_FACTOR_TAG),
    }),
  }
}
