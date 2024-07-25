import { type EndpointBuilder } from "@reduxjs/toolkit/query/react"

import {
  buildUrl,
  tagData,
  type ListArg,
  type ListResult,
  type RetrieveArg,
  type RetrieveResult,
} from "../../utils/api"
import type { Class, School, User } from "../models"
import { type TagTypes } from "../tagTypes"
import urls from "../urls"

export const USER_TAG: TagTypes = "User"

export type RetrieveUserResult = RetrieveResult<
  User,
  | "first_name"
  | "last_name"
  | "email"
  | "is_active"
  | "date_joined"
  | "requesting_to_join_class"
  | "student"
  | "teacher"
>
export type RetrieveUserArg = RetrieveArg<User>

export type ListUsersResult = ListResult<
  User,
  | "first_name"
  | "last_name"
  | "email"
  | "is_active"
  | "date_joined"
  | "requesting_to_join_class"
  | "student"
  | "teacher"
>
export type ListUsersArg = ListArg<{
  students_in_class: Class["id"]
  teachers_in_school: School["id"]
}>

export default function getReadUserEndpoints(
  build: EndpointBuilder<any, any, any>,
) {
  return {
    retrieveUser: build.query<RetrieveUserResult, RetrieveUserArg>({
      query: id => ({
        url: buildUrl(urls.user.detail, { url: { id } }),
        method: "GET",
      }),
      providesTags: tagData(USER_TAG),
    }),
    listUsers: build.query<ListUsersResult, ListUsersArg>({
      query: search => ({
        url: buildUrl(urls.user.list, { search }),
        method: "GET",
      }),
      providesTags: tagData(USER_TAG),
    }),
  }
}
