import { getNestedProperty } from "./general"

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
