import { type EndpointBuilder } from "@reduxjs/toolkit/query/react"

import {
  buildUrl,
  tagData,
  type RetrieveArg,
  type RetrieveResult,
} from "../../utils/api"
import type { School } from "../models"
import { type TagTypes } from "../tagTypes"
import urls from "../urls"

export const SCHOOL_TAG: TagTypes = "School"

export type RetrieveSchoolResult = RetrieveResult<
  School,
  "name" | "country" | "uk_county"
>
export type RetrieveSchoolArg = RetrieveArg<School>

export default function getReadSchoolEndpoints(
  build: EndpointBuilder<any, any, any>,
) {
  return {
    retrieveSchool: build.query<RetrieveSchoolResult, RetrieveSchoolArg>({
      query: id => ({
        url: buildUrl(urls.school.detail, { url: { id } }),
        method: "GET",
      }),
      providesTags: tagData(SCHOOL_TAG),
    }),
  }
}
