import Cookies from "js-cookie"

import {
  SESSION_COOKIE_NAME,
  SESSION_METADATA_COOKIE_NAME,
  CSRF_COOKIE_NAME,
} from "../settings"

export function logout() {
  Cookies.remove(SESSION_COOKIE_NAME)
  Cookies.remove(SESSION_METADATA_COOKIE_NAME)
}

// https://docs.djangoproject.com/en/3.2/ref/csrf/
export function getCsrfCookie() {
  return Cookies.get(CSRF_COOKIE_NAME)
}
