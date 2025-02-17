import { isDirty, getDirty, getCleanNames } from "./form"

const VALUES = {
  name: { first: "Peter", last: "Parker" },
}
const INITIAL_VALUES: typeof VALUES = {
  name: { first: "Peter", last: "Robbins" },
}

// isDirty

test("value is dirty", () => {
  const value = isDirty(VALUES, INITIAL_VALUES, "name.last")

  expect(value).toBe(true)
})

test("value is clean", () => {
  const value = isDirty(VALUES, INITIAL_VALUES, "name.first")

  expect(value).toBe(false)
})

// getDirty

test("get dirty values", () => {
  const dirty = getDirty(VALUES, INITIAL_VALUES)

  expect(dirty).toMatchObject({ "name.first": false, "name.last": true })
})

test("get subset of dirty values", () => {
  const dirty = getDirty(VALUES, INITIAL_VALUES, ["name.first"])

  expect(dirty).toMatchObject({ "name.first": false })
})

// getCleanNames

test("get clean names", () => {
  const cleanNames = getCleanNames(VALUES, INITIAL_VALUES)

  expect(cleanNames).toMatchObject(["name.first"])
})

test("get subset of clean names", () => {
  const cleanNames = getCleanNames(VALUES, INITIAL_VALUES, ["name.last"])

  expect(cleanNames).toMatchObject([])
})
