import { generatePath } from "react-router-dom"

export type ReadOnly<T> = {
  readonly [P in keyof T]: T[P]
}

export type Parameters = Record<string, string>

export interface Path {
  _: string
  __: string | Parameters
  [subpath: string]: string | Path | Parameters
}

export function path<Subpaths extends Record<string, Path>>(
  _: string | Parameters,
  subpaths: Subpaths = {} as Subpaths,
): Path & Subpaths {
  function updatePath(path: Path, root: boolean): void {
    if (typeof path.__ === "object" && typeof _ === "string") {
      _ = generatePath(_, path.__)
    }

    Object.entries(path).forEach(([key, subpath]) => {
      if (key !== "__") {
        if (typeof subpath === "string") {
          if (typeof _ === "string" && (!root || key !== "_")) {
            path[key] = _ + subpath
          }
        } else {
          updatePath(subpath as Path, false)
        }
      }
    })
  }

  const path = { ...subpaths, _: typeof _ === "string" ? _ : "", __: _ }
  if (_ === "") {
    path._ = "/"
  } else {
    updatePath(path, true)
  }
  return path
}
