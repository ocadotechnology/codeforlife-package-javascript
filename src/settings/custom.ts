/**
 * This file contains all of our custom settings we define for our own purposes.
 *
 * This file is based on:
 * https://github.com/ocadotechnology/codeforlife-package-python/blob/main/codeforlife/settings/custom.py
 */

// Shorthand to access environment variables.
const env = import.meta.env as Record<string, string | undefined>

// The name of the current service.
export const SERVICE_NAME = env.VITE_SERVICE_NAME ?? "REPLACE_ME"

// The title of the current service. Used in the <title/> within the <head/>.
export const SERVICE_TITLE =
  env.VITE_SERVICE_TITLE ?? `Code for Life | ${SERVICE_NAME}`

// The api url of the current service.
export const SERVICE_API_URL =
  env.VITE_SERVICE_API_URL ?? "http://localhost:8000"

// The names of cookies.
export const CSRF_COOKIE_NAME = `${SERVICE_NAME}_csrftoken`
export const SESSION_COOKIE_NAME = env.VITE_SESSION_COOKIE_NAME ?? "session_key"
export const SESSION_METADATA_COOKIE_NAME =
  env.VITE_SESSION_METADATA_COOKIE_NAME ?? "session_metadata"
