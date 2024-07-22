import { type EndpointBuilder } from "@reduxjs/toolkit/query/react"

import {
  buildUrl,
  tagData,
  type ListArg,
  type ListResult,
  type RetrieveArg,
  type RetrieveResult,
} from "../../utils/api"
import type { Class } from "../models"
import { type TagTypes } from "../tagTypes"
import urls from "../urls"

export const CLASS_TAG: TagTypes = "Class"

export type RetrieveClassResult = RetrieveResult<
  Class,
  | "name"
  | "read_classmates_data"
  | "receive_requests_until"
  | "school"
  | "teacher"
>
export type RetrieveClassArg = RetrieveArg<Class>

export type ListClassesResult = ListResult<
  Class,
  | "name"
  | "read_classmates_data"
  | "receive_requests_until"
  | "school"
  | "teacher"
>
export type ListClassesArg = ListArg

export default function getReadClassEndpoints(
  build: EndpointBuilder<any, any, any>,
) {
  return {
    retrieveClass: build.query<RetrieveClassResult, RetrieveClassArg>({
      query: id => ({
        url: buildUrl(urls.class.detail, { url: { id } }),
        method: "GET",
      }),
      providesTags: tagData(CLASS_TAG),
    }),
    listClasses: build.query<ListClassesResult, ListClassesArg>({
      query: search => ({
        url: buildUrl(urls.class.list, { search }),
        method: "GET",
      }),
      providesTags: tagData(CLASS_TAG),
    }),
  }
}
