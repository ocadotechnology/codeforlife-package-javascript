import { createApi as _createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"

import { SERVICE_API_URL } from "../env"
import { getCsrfCookie, logout } from "../utils/auth"
import defaultTagTypes from "./tagTypes"

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
} = {}) {
  const fetch = fetchBaseQuery({
    baseUrl: `${SERVICE_API_URL}/`,
    credentials: "include",
    prepareHeaders: (headers, { type }) => {
      if (type === "mutation") {
        let csrfToken = getCsrfCookie()
        if (csrfToken) headers.set("x-csrftoken", csrfToken)
      }

      return headers
    },
  })

  const api = _createApi({
    // https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-custom-basequery
    baseQuery: async (args, api, extraOptions) => {
      if (api.type === "mutation" && getCsrfCookie() === undefined) {
        // Get the CSRF token.
        const { error } = await fetch(
          { url: "/csrf/cookie", method: "GET" },
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
    endpoints: build => ({
      logout: build.mutation<null, null>({
        query: () => ({
          url: "session/logout/",
          method: "POST",
        }),
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            await queryFulfilled
          } catch (error) {
            console.error("Failed to call logout endpoint...", error)
          } finally {
            logout()
            dispatch(api.util.resetApiState())
          }
        },
      }),
    }),
  })

  return api
}
