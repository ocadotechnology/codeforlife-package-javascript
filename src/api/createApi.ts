import {
  type Api,
  type BaseQueryApi,
  type FetchArgs,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
  type MutationDefinition,
  type QueryReturnValue,
  createApi as _createApi,
  type coreModuleName,
  fetchBaseQuery,
  type reactHooksModuleName,
} from "@reduxjs/toolkit/query/react"

import defaultTagTypes, { type TagTypes as DefaultTagTypes } from "./tagTypes"
import { SERVICE_API_URL } from "../settings"
import { buildLogoutEndpoint } from "./endpoints/session"
import { getCsrfCookie } from "../utils/auth"
import { isSafeHttpMethod } from "../utils/api"

// TODO: decide if we want to keep any of this.
// export function handleResponseError(error: FetchBaseQueryError): void {
//   if (
//     error.status === 400 &&
//     typeof error.data === "object" &&
//     error.data !== null
//   ) {
//     // Parse the error's data from snake_case to camelCase.
//     snakeCaseToCamelCase(error.data)
//   } else if (error.status === 401) {
//     // TODO: redirect to appropriate login page based on user type.
//     window.location.href = `${PORTAL_BASE_URL}/login/teacher`
//   } else {
//     // Catch-all error pages by status-code.
//     window.location.href = `${PORTAL_BASE_URL}/error/${
//       [403, 404].includes(error.status as number) ? error.status : 500
//     }`
//   }
// }

export default function createApi<TagTypes extends string = never>({
  tagTypes = [],
}: {
  tagTypes?: readonly TagTypes[]
} = {}): Api<
  (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions: {},
  ) => Promise<
    QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
  >,
  { logout: MutationDefinition<null, any, any, null, any, any> },
  "api",
  TagTypes | DefaultTagTypes,
  typeof coreModuleName | typeof reactHooksModuleName
> {
  const fetch = fetchBaseQuery({
    baseUrl: `${SERVICE_API_URL}/`,
    credentials: "include",
    prepareHeaders: (headers, endpoint) => {
      const { type, arg } = endpoint as typeof endpoint & {
        arg: string | FetchArgs
      }
      const method = typeof arg === "string" ? "GET" : arg.method || "GET"

      if (type === "mutation" || !isSafeHttpMethod(method)) {
        const csrfToken = getCsrfCookie()
        if (csrfToken) headers.set("x-csrftoken", csrfToken)
      }

      return headers
    },
  })

  const api = _createApi({
    // https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-custom-basequery
    baseQuery: async (args: string | FetchArgs, api, extraOptions) => {
      if (api.type === "mutation" && getCsrfCookie() === undefined) {
        // Get the CSRF token.
        const { error } = await fetch(
          { url: "/csrf/cookie/", method: "GET" },
          api,
          {},
        )

        // Validate we got the CSRF token.
        if (error !== undefined) {
          console.error(error)
          // TODO
          // window.location.href = `${PORTAL_BASE_URL}/error/500`
        }
        if (getCsrfCookie() === undefined) {
          // TODO
          // window.location.href = `${PORTAL_BASE_URL}/error/500`
        }
      }

      // Send the HTTP request and fetch the response.
      return await fetch(args, api, extraOptions)
    },
    tagTypes: [...defaultTagTypes, ...tagTypes],
    endpoints: () => ({}),
  })

  return api.injectEndpoints({
    endpoints: build => ({
      logout: buildLogoutEndpoint<null, null>(api, build),
    }),
  })
}
