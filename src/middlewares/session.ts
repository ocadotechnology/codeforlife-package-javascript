import { type Middleware, isAction } from "@reduxjs/toolkit"

import { logout } from "../utils/auth"

export const logoutMiddleware: Middleware =
  (
    _, // eslint-disable-line @typescript-eslint/no-unused-vars
  ) =>
  next =>
  action => {
    const response = next(action)

    // The backend should delete these cookie upon calling the logout endpoint.
    // However, as a precaution, we also delete the session cookies in case the
    // backend fails to delete the cookies.
    if (isAction(action) && action.type === "session/logout") {
      logout()
    }

    return response
  }
