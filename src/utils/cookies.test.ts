// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import Cookies from "js-cookie"

import ExpressCookies from "./cookies"

function testCookie(
  value: any,
  {
    name = "name",
    path = "/",
    setValue,
    getValue,
  }: {
    name?: string
    path?: string
    setValue?: string
    getValue?: any
  } = {},
) {
  const cookieValue = ExpressCookies.set(name, value)
  setValue = setValue ?? String(value)
  setValue = Cookies.converter.write(setValue, name)
  expect(cookieValue).toBe(`${name}=${setValue}; path=${path}`)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const actualValue = ExpressCookies.get(name)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  getValue = getValue ?? value
  expect(typeof actualValue).toEqual(typeof getValue)
}

test("round-trips an object as a Express JSON cookie", () => {
  const value = { key: "value" }
  testCookie(value, { setValue: `j:${JSON.stringify(value)}` })
})

test("round-trips an array as a Express JSON cookie", () => {
  const value = [1, 2, 3]
  testCookie(value, { setValue: `j:${JSON.stringify(value)}` })
})

test("returns plain string cookies as-is", () => {
  testCookie("plain-text")
})

test("does not mark JSON primitives as Express JSON cookies", () => {
  testCookie(42, { getValue: "42" })
})
