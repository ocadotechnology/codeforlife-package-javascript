let ENV: ImportMetaEnv = {} as ImportMetaEnv
let SETUP = false

/**
 * Set up the settings. This should be called once at the root of the app.
 *
 * @param env The environment variables (passed as `import.meta.env`).
 * @returns An object containing the common settings.
 */
export function setup(env: ImportMetaEnv) {
  ENV = env
  SETUP = true

  return {
    SERVICE_NAME: getServiceName(),
    SERVICE_TITLE: getServiceTitle(),
    SERVICE_API_URL: getServiceApiUrl(),
    CSRF_COOKIE_NAME: getCsrfCookieName(),
    SESSION_COOKIE_NAME: getSessionCookieName(),
    SESSION_METADATA_COOKIE_NAME: getSessionMetadataCookieName(),
  }
}

export type GetSettingOptions<T = string> = T extends string
  ? { defaultValue: string }
  : { cast: (value: string) => T; defaultValue?: T }

export function getSetting(name: string): string | undefined

export function getSetting(
  name: string,
  options: { defaultValue: string },
): string

export function getSetting<T>(
  name: string,
  options: { cast: (value: string) => T },
): T | undefined

export function getSetting<T>(
  name: string,
  options: { cast: (value: string) => T; defaultValue: T },
): T

export function getSetting<T = string>(
  name: string,
  options: GetSettingOptions<T> = {} as GetSettingOptions<T>,
): string | T | undefined {
  if (!SETUP) {
    throw new Error(
      "Settings have not been set up. Please call " +
        "setup(import.meta.env) before calling getSetting.",
    )
  }

  // Shorthand to access environment variables.
  const value = ENV[`VITE_${name}`] as string | undefined
  if (value === undefined) return options?.defaultValue
  return "cast" in options ? options.cast(value) : value
}

// The name of the current service.
export const getServiceName = () =>
  getSetting("SERVICE_NAME", { defaultValue: "REPLACE_ME" })

// The title of the current service. Used in the <title/> within the <head/>.
export const getServiceTitle = () =>
  getSetting("SERVICE_TITLE", {
    defaultValue: `Code for Life | ${getServiceName()}`,
  })

// The api url of the current service.
export const getServiceApiUrl = () =>
  getSetting("SERVICE_API_URL", { defaultValue: "http://localhost:8000" })

// The names of cookies.
export const getCsrfCookieName = () =>
  getSetting("CSRF_COOKIE_NAME", {
    defaultValue: `${getServiceName()}_csrftoken`,
  })
export const getSessionCookieName = () =>
  getSetting("SESSION_COOKIE_NAME", { defaultValue: "session_key" })
export const getSessionMetadataCookieName = () =>
  getSetting("SESSION_METADATA_COOKIE_NAME", {
    defaultValue: "session_metadata",
  })
