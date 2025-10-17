import { type Parameters, type Path, path as p } from "./router"

const m = <SubMatches extends Record<string, Path>>(
  _: string,
  __: string | Parameters,
  subMatches: SubMatches = {} as SubMatches,
) => ({ _, __, ...subMatches })

function expectPathsToMatch({ paths, match }: { paths: Path; match: Path }) {
  expect(paths).toMatchObject(match)
}

test("no nested paths", () => {
  expectPathsToMatch({
    paths: p(""),
    match: m("/", ""),
  })
})

test("nested paths", () => {
  expectPathsToMatch({
    paths: p("", {
      a: p("/a", {
        b: p("/b"),
      }),
    }),
    match: m("/", "", {
      a: m("/a", "/a"),
    }),
  })
})

test("one param", () => {
  expectPathsToMatch({
    paths: p("", {
      person: p("/person", {
        name: p("/:name", {
          sam: p({ name: "samantha" }),
        }),
      }),
    }),
    match: m("/", "", {
      person: m("/person", "/person", {
        name: m("/person/:name", "/:name", {
          sam: m("/person/samantha", { name: "samantha" }),
        }),
      }),
    }),
  })
})

test("multiple params", () => {
  expectPathsToMatch({
    paths: p("", {
      hero: p("/hero", {
        firstAndLastName: p("/:firstName/:lastName", {
          spiderMan: p(
            { firstName: "peter", lastName: "parker" },
            {
              mainVillain: p("/green-goblin"),
            },
          ),
        }),
      }),
    }),
    match: m("/", "", {
      hero: m("/hero", "/hero", {
        firstAndLastName: m(
          "/hero/:firstName/:lastName",
          "/:firstName/:lastName",
          {
            spiderMan: m(
              "/hero/peter/parker",
              { firstName: "peter", lastName: "parker" },
              {
                mainVillain: m(
                  "/hero/peter/parker/green-goblin",
                  "/green-goblin",
                ),
              },
            ),
          },
        ),
      }),
    }),
  })
})

test("nested params", () => {
  expectPathsToMatch({
    paths: p("", {
      hero: p("/hero", {
        firstName: p("/:firstName", {
          spiderMan: p({ firstName: "peter" }),
          lastName: p("/:lastName?", {
            superMan: p(
              { firstName: "clark" },
              {
                superMan: p({ lastName: "kent" }),
              },
            ),
          }),
          batMan: p(
            { firstName: "bruce" },
            {
              lastName: p("/:lastName", {
                batMan: p(
                  { lastName: "wayne" },
                  {
                    mainVillain: p("/joker"),
                  },
                ),
              }),
            },
          ),
        }),
      }),
    }),
    match: m("/", "", {
      hero: m("/hero", "/hero", {
        firstName: m("/hero/:firstName", "/:firstName", {
          spiderMan: m("/hero/peter", { firstName: "peter" }),
          lastName: m("/hero/:firstName/:lastName?", "/:lastName?", {
            superMan: m(
              "/hero/clark",
              { firstName: "clark" },
              {
                superMan: m("/hero/clark/kent", { lastName: "kent" }),
              },
            ),
          }),
          batMan: m(
            "/hero/bruce",
            { firstName: "bruce" },
            {
              lastName: m("/hero/bruce/:lastName", "/:lastName", {
                batMan: m(
                  "/hero/bruce/wayne",
                  { lastName: "wayne" },
                  {
                    mainVillain: m("/hero/bruce/wayne/joker", "/joker"),
                  },
                ),
              }),
            },
          ),
        }),
      }),
    }),
  })
})
