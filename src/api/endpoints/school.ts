import { type EndpointBuilder } from "@reduxjs/toolkit/query/react"

import {
  type RetrieveArg as _RetrieveArg,
  type RetrieveResult as _RetrieveResult,
  buildUrl,
  tagData,
} from "../../utils/api"
import type { School } from "../models"
import { type TagTypes } from "../tagTypes"
import urls from "../urls"

export const SCHOOL_TAG: TagTypes = "School"

export type RetrieveSchoolResult = _RetrieveResult<
  School,
  "name" | "country" | "uk_county"
>
export type RetrieveSchoolArg = _RetrieveArg<School>

export default function getReadSchoolEndpoints<
  RetrieveResult extends _RetrieveResult<School> = RetrieveSchoolResult,
  RetrieveArg extends _RetrieveArg<School> = RetrieveSchoolArg,
>(build: EndpointBuilder<any, any, any>) {
  return {
    retrieveSchool: build.query<RetrieveResult, RetrieveArg>({
      query: id => ({
        url: buildUrl(urls.school.detail, { url: { id } }),
        method: "GET",
      }),
      providesTags: tagData(SCHOOL_TAG),
    }),
  }
}
