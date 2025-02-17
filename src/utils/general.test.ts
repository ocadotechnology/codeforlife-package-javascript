import {
  excludeKeyPaths,
  getNestedProperty,
  withKeyPaths,
  getKeyPaths,
} from "./general"

// getNestedProperty

const PERSON = { father: { father: { name: "John" } } }

test("get a nested property with dot notation", () => {
  const name = getNestedProperty(PERSON, "father.father.name")

  expect(name).equal("John")
})

test("get a nested property with string array", () => {
  const name = getNestedProperty(PERSON, ["father", "father", "name"])

  expect(name).equal("John")
})

test("get a nested property that doesn't exist", () => {
  const name = getNestedProperty(PERSON, "mother.mother.name")

  expect(name).toBeUndefined()
})

// withKeyPaths

test("set the paths of nested keys", () => {
  const obj = withKeyPaths({ a: 1, b: { c: 2, d: { e: 3 } } })

  expect(obj).toMatchObject({ a: 1, b: { "b.c": 2, "b.d": { "b.d.e": 3 } } })
})

// getKeyPaths

test("get the paths of nested keys", () => {
  const keyPaths = getKeyPaths({ a: 1, b: { c: 2, d: { e: 3 } } })

  expect(keyPaths).toMatchObject(["a", "b", "b.c", "b.d", "b.d.e"])
})

// excludeKeyPaths

test("exclude nested keys by their path", () => {
  const obj = excludeKeyPaths({ a: 1, b: { c: 2, d: { e: 3 } } }, [
    "b.c",
    "b.d.e",
  ])

  expect(obj).toMatchObject({ a: 1, b: { d: {} } })
})
