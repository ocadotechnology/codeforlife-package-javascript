import { path as _, PathError } from "./router"

test("base path to be replaced with '/'", () => {
  const paths = _("")

  expect(paths._).toBe("/")
})

test("'__' key to be the unmodified key", () => {
  const paths = _("", {
    a: _("/a", {
      b: _("/b"),
    }),
  })

  expect(paths.a.b.__).toBe("/b")
})

test("'_' key to be the modified key", () => {
  const paths = _("", {
    a: _("/a", {
      b: _("/b"),
    }),
  })

  expect(paths.a.b._).toBe("/a/b")
})

test("single param to be replaced with option", () => {
  const paths = _("", {
    person: _("/person", {
      name: _("/:name", {
        bob: _("bob"),
        sam: _("samantha"),
      }),
    }),
  })

  expect(paths.person.name.bob._).toBe("/person/bob")
  expect(paths.person.name.sam._).toBe("/person/samantha")
})

test("multiple params to be replaced with options", () => {
  const paths = _("", {
    hero: _("/hero", {
      firstAndLastName: _("/:firstName/:lastName", {
        spiderMan: _("peter,parker", {
          mainVillain: _("/green-goblin"),
        }),
      }),
      firstName: _("/:firstName", {
        batMan: _("bruce", {
          lastName: _("/:lastName", {
            batMan: _("wayne", {
              mainVillain: _("/joker"),
            }),
          }),
        }),
      }),
    }),
  })

  expect(paths.hero.firstAndLastName.spiderMan.mainVillain._).toBe(
    "/hero/peter/parker/green-goblin",
  )
  expect(paths.hero.firstName.batMan.lastName.batMan.mainVillain._).toBe(
    "/hero/bruce/wayne/joker",
  )
})

test("unequal length of param keys and values", () => {
  expect(() => {
    _("", {
      firstAndLastName: _("/:firstName/:lastName", {
        john: _("john"),
      }),
    })
  }).toThrowError(PathError)
})
