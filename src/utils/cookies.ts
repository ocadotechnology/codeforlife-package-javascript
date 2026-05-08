// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import Cookies from "js-cookie"

const EXPRESS_JSON_PREFIX = "j:"

/**
 * A wrapper around js-cookie that supports Express-style JSON cookies. See:
 * https://github.com/js-cookie/js-cookie/blob/main/SERVER_SIDE.md#express
 */
const ExpressCookies: ReturnType<typeof Cookies.withConverter<any>> =
  Cookies.withConverter<any>({
    write: (value, name) => {
      const stringValue =
        typeof value === "object" && value !== null
          ? EXPRESS_JSON_PREFIX + JSON.stringify(value as object)
          : String(value)

      return Cookies.converter.write(stringValue, name)
    },
    read: (cookieValue, name) => {
      const stringValue = Cookies.converter.read(cookieValue, name)

      return stringValue.startsWith(EXPRESS_JSON_PREFIX)
        ? (JSON.parse(stringValue.slice(EXPRESS_JSON_PREFIX.length)) as object)
        : stringValue
    },
  })

export default ExpressCookies
