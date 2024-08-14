/**
 * This file contains all of our custom settings we define for our own purposes.
 *
 * This file is based on:
 * https://github.com/ocadotechnology/codeforlife-package-python/blob/main/codeforlife/settings/custom.py
 */

// Shorthand to access environment variables.
const env = import.meta.env
export default env

// The name of the current service.
export const SERVICE_NAME = env.VITE_SERVICE_NAME ?? "REPLACE_ME"

// If the current service the root service. This will only be true for portal.
export const SERVICE_IS_ROOT = Boolean(Number(env.VITE_SERVICE_IS_ROOT ?? "0"))

// The protocol, domain and port of the current service.
export const SERVICE_PROTOCOL = env.VITE_SERVICE_PROTOCOL ?? "http"
export const SERVICE_DOMAIN = env.VITE_SERVICE_DOMAIN ?? "localhost"
export const SERVICE_PORT = Number(env.VITE_SERVICE_PORT ?? "8000")

// The base url of the current service.
// The root service does not need its name included in the base url.
export const SERVICE_BASE_URL =
  `${SERVICE_PROTOCOL}://${SERVICE_DOMAIN}:${SERVICE_PORT}` +
  (SERVICE_IS_ROOT ? "" : `/${SERVICE_NAME}`)

// The api url of the current service.
export const SERVICE_API_URL = `${SERVICE_BASE_URL}/api`
