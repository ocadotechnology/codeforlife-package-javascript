import Cookies from "js-cookie"
import { type Middleware, isAction } from "@reduxjs/toolkit"

import { SESSION_COOKIE_NAME, SESSION_METADATA_COOKIE_NAME } from "../settings"

export const logoutMiddleware: Middleware = _ => next => action => {
  const response = next(action)

  // The backend should delete these cookie upon calling the logout endpoint.
  // However, as a precaution, we also delete the session cookies in case the
  // backend fails to delete the cookies.
  if (isAction(action) && action.type === "session/logout") {
    Cookies.remove(SESSION_COOKIE_NAME)
    Cookies.remove(SESSION_METADATA_COOKIE_NAME)
  }

  return response
}
