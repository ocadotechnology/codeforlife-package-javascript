import { buildUrl } from "./api"

test("url params", () => {
  const url = buildUrl("<id>/", { url: { id: 1 } })

  expect(url).toBe("1/")
})

test("single search value", () => {
  const url = buildUrl("/", { search: { age: 18 } })

  expect(url).toBe("/?age=18")
})

test("multiple search values", () => {
  const url = buildUrl("/", { search: { age: [18, 21] } })

  expect(url).toBe("/?age=18&age=21")
})
