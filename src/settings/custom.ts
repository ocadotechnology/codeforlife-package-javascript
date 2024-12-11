/**
 * This file contains all of our custom settings we define for our own purposes.
 *
 * This file is based on:
 * https://github.com/ocadotechnology/codeforlife-package-python/blob/main/codeforlife/settings/custom.py
 */

// Shorthand to access environment variables.
const env = import.meta.env

// The name of the current service.
export const SERVICE_NAME: string = env.VITE_SERVICE_NAME ?? "REPLACE_ME"

// The api url of the current service.
export const SERVICE_API_URL: string =
  env.VITE_SERVICE_API_URL ?? "http://localhost:8000"

// The names of cookies.
export const CSRF_COOKIE_NAME = `${SERVICE_NAME}_csrftoken`
export const SESSION_COOKIE_NAME: string =
  env.VITE_SESSION_COOKIE_NAME ?? "session_key"
export const SESSION_METADATA_COOKIE_NAME: string =
  env.VITE_SESSION_METADATA_COOKIE_NAME ?? "session_metadata"
