import { type EndpointBuilder, type Api } from "@reduxjs/toolkit/query/react"

import { login, logout } from "../../slices/session"

export type ExchangeOAuth2CodeArg = {
  code: string
  code_verifier: string
  redirect_uri: string
}

export function buildLoginEndpoint<ResultType, QueryArg>(
  build: EndpointBuilder<any, any, any>,
  url: string = "session/login/",
) {
  return build.mutation<ResultType, QueryArg>({
    query: body => ({ url, method: "POST", body }),
    async onQueryStarted(_, { dispatch, queryFulfilled }) {
      try {
        await queryFulfilled
        dispatch(login())
      } catch (error) {
        console.error("Failed to call login endpoint...", error)
      }
    },
  })
}

export function buildLogoutEndpoint<ResultType, QueryArg>(
  api: Api<any, any, any, any, any>,
  build: EndpointBuilder<any, any, any>,
  url: string = "session/logout/",
) {
  return build.mutation<ResultType, QueryArg>({
    query: () => ({ url, method: "POST" }),
    async onQueryStarted(_, { dispatch, queryFulfilled }) {
      try {
        await queryFulfilled
      } catch (error) {
        console.error("Failed to call logout endpoint...", error)
      } finally {
        dispatch(logout())
        dispatch(api.util.resetApiState())
      }
    },
  })
}
