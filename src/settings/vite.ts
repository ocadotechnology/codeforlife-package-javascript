/**
 * This file contains all of vite's environment variables.
 *
 * https://vite.dev/guide/env-and-mode#env-variables
 */

// Shorthand to access environment variables.
const env = import.meta.env

// The mode the app is running in.
export const MODE = env.MODE

// The base url the app is being served from.
// This is determined by the base config option.
export const BASE_URL = env.BASE_URL

// Whether the app is running in production (running the dev server with
// NODE_ENV='production' or running an app built with NODE_ENV='production').
export const PROD = env.PROD

// Whether the app is running in development (always the opposite of
// import.meta.env.PROD)
export const DEV = env.DEV

// Whether the app is running in the server.
export const SSR = env.SSR
