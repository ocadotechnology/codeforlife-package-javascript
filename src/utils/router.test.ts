import { path as _ } from "./router"

test("no nested paths", () => {
  const paths = _("")

  expect(paths._).toBe("/")
  expect(paths.__).toBe("")
})

test("nested paths", () => {
  const paths = _("", {
    a: _("/a", {
      b: _("/b"),
    }),
  })

  expect(paths._).toBe("/")
  expect(paths.__).toBe("")
  expect(paths.a._).toBe("/a")
  expect(paths.a.__).toBe("/a")
  expect(paths.a.b._).toBe("/a/b")
  expect(paths.a.b.__).toBe("/b")
})

test("one param", () => {
  const paths = _("", {
    person: _("/person", {
      name: _("/:name", {
        sam: _({ name: "samantha" }),
      }),
    }),
  })

  expect(paths._).toBe("/")
  expect(paths.__).toBe("")
  expect(paths.person._).toBe("/person")
  expect(paths.person.__).toBe("/person")
  expect(paths.person.name._).toBe("/person/:name")
  expect(paths.person.name.__).toBe("/:name")
  expect(paths.person.name.sam._).toBe("/person/samantha")
  expect(paths.person.name.sam.__).toMatchObject({ name: "samantha" })
})

test("multiple params", () => {
  const paths = _("", {
    hero: _("/hero", {
      firstAndLastName: _("/:firstName/:lastName", {
        spiderMan: _(
          { firstName: "peter", lastName: "parker" },
          {
            mainVillain: _("/green-goblin"),
          },
        ),
      }),
    }),
  })

  expect(paths._).toBe("/")
  expect(paths.__).toBe("")
  expect(paths.hero._).toBe("/hero")
  expect(paths.hero.__).toBe("/hero")
  expect(paths.hero.firstAndLastName._).toBe("/hero/:firstName/:lastName")
  expect(paths.hero.firstAndLastName.__).toBe("/:firstName/:lastName")
  expect(paths.hero.firstAndLastName.spiderMan._).toBe("/hero/peter/parker")
  expect(paths.hero.firstAndLastName.spiderMan.__).toMatchObject({
    firstName: "peter",
    lastName: "parker",
  })
  expect(paths.hero.firstAndLastName.spiderMan.mainVillain._).toBe(
    "/hero/peter/parker/green-goblin",
  )
  expect(paths.hero.firstAndLastName.spiderMan.mainVillain.__).toBe(
    "/green-goblin",
  )
})

test("nested params", () => {
  const paths = _("", {
    hero: _("/hero", {
      firstName: _("/:firstName", {
        batMan: _(
          { firstName: "bruce" },
          {
            lastName: _("/:lastName", {
              batMan: _(
                { lastName: "wayne" },
                {
                  mainVillain: _("/joker"),
                },
              ),
            }),
          },
        ),
      }),
    }),
  })

  expect(paths._).toBe("/")
  expect(paths.__).toBe("")
  expect(paths.hero._).toBe("/hero")
  expect(paths.hero.__).toBe("/hero")
  expect(paths.hero.firstName._).toBe("/hero/:firstName")
  expect(paths.hero.firstName.__).toBe("/:firstName")
  expect(paths.hero.firstName.batMan._).toBe("/hero/bruce")
  expect(paths.hero.firstName.batMan.__).toMatchObject({ firstName: "bruce" })
  expect(paths.hero.firstName.batMan.lastName._).toBe("/hero/bruce/:lastName")
  expect(paths.hero.firstName.batMan.lastName.__).toBe("/:lastName")
  expect(paths.hero.firstName.batMan.lastName.batMan._).toBe(
    "/hero/bruce/wayne",
  )
  expect(paths.hero.firstName.batMan.lastName.batMan.__).toMatchObject({
    lastName: "wayne",
  })
  expect(paths.hero.firstName.batMan.lastName.batMan.mainVillain._).toBe(
    "/hero/bruce/wayne/joker",
  )
  expect(paths.hero.firstName.batMan.lastName.batMan.mainVillain.__).toBe(
    "/joker",
  )
})
