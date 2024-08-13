import Cookies from "js-cookie"

export function logout() {
  Cookies.remove("session_key")
  Cookies.remove("session_metadata")
}

// https://docs.djangoproject.com/en/3.2/ref/csrf/
export function getCsrfCookie() {
  return Cookies.get(`${import.meta.env.VITE_SERVICE_NAME}_csrftoken`)
}
