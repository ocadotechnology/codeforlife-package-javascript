import { type EndpointBuilder } from "@reduxjs/toolkit/query/react"

import {
  buildUrl,
  tagData,
  type ListArg,
  type ListResult,
} from "../../utils/api"
import type { AuthFactor } from "../models"
import { type TagTypes } from "../tagTypes"
import urls from "../urls"

export const AUTH_FACTOR_TAG: TagTypes = "AuthFactor"

export type ListAuthFactorsResult = ListResult<AuthFactor, "type">
export type ListAuthFactorsArg = ListArg

export default function getReadAuthFactorEndpoints(
  build: EndpointBuilder<any, any, any>,
) {
  return {
    listAuthFactors: build.query<ListAuthFactorsResult, ListAuthFactorsArg>({
      query: search => ({
        url: buildUrl(urls.authFactor.list, { search }),
        method: "GET",
      }),
      providesTags: tagData(AUTH_FACTOR_TAG),
    }),
  }
}
