import { type EndpointBuilder } from "@reduxjs/toolkit/query/react"

import type { Class, User } from "../models"
import {
  type ListArg as _ListArg,
  type ListResult as _ListResult,
  type RetrieveArg as _RetrieveArg,
  type RetrieveResult as _RetrieveResult,
  buildUrl,
  tagData,
} from "../../utils/api"
import { type TagTypes } from "../tagTypes"
import urls from "../urls"

export const USER_TAG: TagTypes = "User"

export type RetrieveUserResult = _RetrieveResult<
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
export type RetrieveUserArg = _RetrieveArg<User>

export type ListUsersResult = _ListResult<
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
export type ListUsersArg = _ListArg<{
  students_in_class: Class["id"]
  _id: User["id"] | User["id"][]
  name: string
  type: "teacher" | "student" | "independent" | "indy"
}>

export default function getReadUserEndpoints<
  RetrieveResult extends _RetrieveResult<User> = RetrieveUserResult,
  RetrieveArg extends _RetrieveArg<User> = RetrieveUserArg,
  ListResult extends _ListResult<User> = ListUsersResult,
  ListArg extends _ListArg<User> = ListUsersArg,
>(build: EndpointBuilder<any, any, any>) {
  return {
    retrieveUser: build.query<RetrieveResult, RetrieveArg>({
      query: id => ({
        url: buildUrl(urls.user.detail, { url: { id } }),
        method: "GET",
      }),
      providesTags: tagData(USER_TAG),
    }),
    listUsers: build.query<ListResult, ListArg>({
      query: search => ({
        url: buildUrl(urls.user.list, { search }),
        method: "GET",
      }),
      providesTags: tagData(USER_TAG, { includeListTag: true }),
    }),
  }
}
