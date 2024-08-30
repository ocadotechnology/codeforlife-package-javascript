import { type EndpointBuilder } from "@reduxjs/toolkit/query/react"

import {
  buildUrl,
  tagData,
  type ListArg as _ListArg,
  type ListResult as _ListResult,
  type RetrieveArg as _RetrieveArg,
  type RetrieveResult as _RetrieveResult,
} from "../../utils/api"
import type {
  Class,
  Teacher,
  SchoolTeacher,
  SchoolTeacherUser,
} from "../models"
import { type TagTypes } from "../tagTypes"
import urls from "../urls"

export const CLASS_TAG: TagTypes = "Class"

export type RetrieveClassResult = _RetrieveResult<
  Class,
  "name" | "read_classmates_data" | "receive_requests_until" | "school"
> & {
  teacher: SchoolTeacher & {
    user: Pick<
      SchoolTeacherUser,
      | "id"
      | "first_name"
      | "last_name"
      | "email"
      | "is_active"
      | "date_joined"
      | "requesting_to_join_class"
    >
  }
}
export type RetrieveClassArg = _RetrieveArg<Class>

export type ListClassesResult = _ListResult<
  Class,
  "name" | "read_classmates_data" | "receive_requests_until" | "school",
  {
    teacher: SchoolTeacher & {
      user: Pick<
        SchoolTeacherUser,
        | "id"
        | "first_name"
        | "last_name"
        | "email"
        | "is_active"
        | "date_joined"
        | "requesting_to_join_class"
      >
    }
  }
>
export type ListClassesArg = _ListArg<{ teacher: Teacher["id"] }>

export default function getReadClassEndpoints<
  RetrieveResult extends _RetrieveResult<Class> = RetrieveClassResult,
  RetrieveArg extends _RetrieveArg<Class> = RetrieveClassArg,
  ListResult extends _ListResult<Class> = ListClassesResult,
  ListArg extends _ListArg<Class> = ListClassesArg,
>(build: EndpointBuilder<any, any, any>) {
  return {
    retrieveClass: build.query<RetrieveResult, RetrieveArg>({
      query: id => ({
        url: buildUrl(urls.class.detail, { url: { id } }),
        method: "GET",
      }),
      providesTags: tagData(CLASS_TAG),
    }),
    listClasses: build.query<ListResult, ListArg>({
      query: search => ({
        url: buildUrl(urls.class.list, { search }),
        method: "GET",
      }),
      providesTags: tagData(CLASS_TAG),
    }),
  }
}
