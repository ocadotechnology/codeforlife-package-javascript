import { type EndpointBuilder as _EndpointBuilder } from "@reduxjs/toolkit/query/react"

import {
  buildUrl,
  tagData,
  type ListArg,
  type ListResult,
  type RetrieveArg,
  type RetrieveResult,
} from "../utils/api"
import type { AuthFactor, Class, School, User } from "./models"
import { type TagTypes } from "./tagTypes"
import urls from "./urls"

type EndpointBuilder = _EndpointBuilder<any, any, any>

export function getReadUserEndpoints(build: EndpointBuilder) {
  const tagType: TagTypes = "User"

  return {
    retrieveUser: build.query<
      RetrieveResult<
        User,
        | "first_name"
        | "last_name"
        | "email"
        | "is_active"
        | "date_joined"
        | "requesting_to_join_class"
        | "student"
        | "teacher"
      >,
      RetrieveArg<User>
    >({
      query: id => ({
        url: buildUrl(urls.user.detail, { url: { id } }),
        method: "GET",
      }),
      providesTags: tagData(tagType),
    }),
    listUsers: build.query<
      ListResult<
        User,
        | "first_name"
        | "last_name"
        | "email"
        | "is_active"
        | "date_joined"
        | "requesting_to_join_class"
        | "student"
        | "teacher"
      >,
      ListArg<{ students_in_class: string }>
    >({
      query: search => ({
        url: buildUrl(urls.user.list, { search }),
        method: "GET",
      }),
      providesTags: tagData(tagType),
    }),
  }
}

export function getReadSchoolEndpoints(build: EndpointBuilder) {
  const tagType: TagTypes = "School"

  return {
    retrieveSchool: build.query<
      RetrieveResult<School, "name" | "country" | "uk_county">,
      RetrieveArg<School>
    >({
      query: id => ({
        url: buildUrl(urls.school.detail, { url: { id } }),
        method: "GET",
      }),
      providesTags: tagData(tagType),
    }),
  }
}

export function getReadClassEndpoints(build: EndpointBuilder) {
  const tagType: TagTypes = "Class"

  return {
    retrieveClass: build.query<
      RetrieveResult<
        Class,
        | "name"
        | "read_classmates_data"
        | "receive_requests_until"
        | "school"
        | "teacher"
      >,
      RetrieveArg<Class>
    >({
      query: id => ({
        url: buildUrl(urls.class.detail, { url: { id } }),
        method: "GET",
      }),
      providesTags: tagData(tagType),
    }),
    listClasses: build.query<
      ListResult<
        Class,
        | "name"
        | "read_classmates_data"
        | "receive_requests_until"
        | "school"
        | "teacher"
      >,
      ListArg
    >({
      query: search => ({
        url: buildUrl(urls.class.list, { search }),
        method: "GET",
      }),
      providesTags: tagData(tagType),
    }),
  }
}

export function getReadAuthFactorEndpoints(build: EndpointBuilder) {
  const tagType: TagTypes = "AuthFactor"

  return {
    listAuthFactors: build.query<ListResult<AuthFactor, "type">, ListArg>({
      query: search => ({
        url: buildUrl(urls.authFactor.list, { search }),
        method: "GET",
      }),
      providesTags: tagData(tagType),
    }),
  }
}
