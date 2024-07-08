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
  function updatePath(_: string | Parameters, path: Path, root: boolean) {
    const _path =
      typeof path.__ === "object" && typeof _ === "string"
        ? generatePath(_, path.__)
        : _

    Object.entries(path).forEach(([key, subpath]) => {
      if (key !== "__") {
        subpath = subpath as string | Path
        if (typeof subpath === "string") {
          if (typeof _path === "string" && (!root || key !== "_")) {
            path[key] = _path + subpath
          }
        } else {
          updatePath(_path, subpath, false)
        }
      }
    })
  }

  const path = { ...subpaths, _: typeof _ === "string" ? _ : "", __: _ }
  if (_ === "") {
    path._ = "/"
  } else {
    updatePath(_, path, true)
  }
  return path
}
