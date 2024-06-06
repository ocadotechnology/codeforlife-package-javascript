import {
  fetchBaseQuery,
  type BaseQueryApi,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query"
import Cookies from "js-cookie"
import qs from "qs"

import { API_BASE_URL, PORTAL_BASE_URL, SERVICE_NAME } from "../env"
import { camelCaseToSnakeCase, snakeCaseToCamelCase } from "../utils/general"

export type FetchBaseQuery = BaseQueryFn<
  FetchArgs,
  unknown,
  FetchBaseQueryError
>

export const fetch = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  credentials: "include",
})

export function parseRequestBody(args: FetchArgs): void {
  // Check if the request has a body and its content type is specified.
  if (typeof args.body !== "object" || args.body === null) return

  camelCaseToSnakeCase(args.body)

  if (args.headers !== undefined && "Content-Type" in args.headers) {
    // Stringify the request body based on its content type.
    switch (args.headers["Content-Type"]) {
      case "application/x-www-form-urlencoded":
        args.body = qs.stringify(args.body)
        break
      case "application/json":
        args.body = JSON.stringify(args.body)
        break
    }
  }
}

export async function injectCsrfToken(
  fetch: FetchBaseQuery,
  args: FetchArgs,
  api: BaseQueryApi,
  serviceName: string = SERVICE_NAME,
): Promise<void> {
  // Check if the request method is safe.
  // https://datatracker.ietf.org/doc/html/rfc9110.html#section-9.2.1
  if (
    args.method !== undefined &&
    ["GET", "HEAD", "OPTIONS", "TRACE"].includes(args.method)
  )
    return

  // https://docs.djangoproject.com/en/3.2/ref/csrf/
  const cookieName = `${serviceName}_csrftoken`
  let csrfToken = Cookies.get(cookieName)
  if (csrfToken === undefined) {
    // Get the CSRF token.
    const { error } = await fetch(
      {
        url: "csrf/cookie/",
        method: "GET",
      },
      api,
      {},
    )

    // Validate we got the CSRF token.
    if (error !== undefined) {
      window.location.href = `${PORTAL_BASE_URL}/error/500`
    }
    csrfToken = Cookies.get(cookieName)
    if (csrfToken === undefined) {
      window.location.href = `${PORTAL_BASE_URL}/error/500`
    }
  }

  // Inject the CSRF token.
  args.body = {
    ...(typeof args.body !== "object" || args.body === null ? {} : args.body),
    csrfmiddlewaretoken: csrfToken,
  }
}

export function handleResponseError(error: FetchBaseQueryError): void {
  if (
    error.status === 400 &&
    typeof error.data === "object" &&
    error.data !== null
  ) {
    // Parse the error's data from snake_case to camelCase.
    snakeCaseToCamelCase(error.data)
  } else if (error.status === 401) {
    // TODO: redirect to appropriate login page based on user type.
    window.location.href = `${PORTAL_BASE_URL}/login/teacher`
  } else {
    // Catch-all error pages by status-code.
    window.location.href = `${PORTAL_BASE_URL}/error/${
      [403, 404].includes(error.status as number) ? error.status : 500
    }`
  }
}

export function parseResponseBody(data: unknown): void {
  // Parse the response's data from snake_case to camelCase.
  if (typeof data !== "object" || data === null) return

  snakeCaseToCamelCase(data)
}

// TODO: https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-custom-basequery
const baseQuery: FetchBaseQuery = async (args, api, extraOptions) => {
  await injectCsrfToken(fetch, args, api)

  parseRequestBody(args)

  // Send the HTTP request and fetch the response.
  const result = await fetch(args, api, extraOptions)

  if (result.error) handleResponseError(result.error)

  parseResponseBody(result.data)

  return result
}

export default baseQuery
