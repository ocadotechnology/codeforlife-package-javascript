export class PathError extends Error {}

export interface Path {
  _: string
  __: string
  [subpath: string]: string | Path
}

export function path<Subpaths extends Record<string, Path>>(
  _: string,
  subpaths: Subpaths = {} as Subpaths,
): Path & Subpaths {
  function updatePath(path: Path, root: boolean): void {
    Object.entries(path).forEach(([key, subpath]) => {
      if (typeof subpath === "string") {
        if (key !== "__" && (!root || key !== "_")) {
          const matches = _.match(/:[^/]+/g)
          if (matches) {
            const params = subpath.split(",")
            if (matches.length !== params.length) {
              throw new PathError(
                `Found ${matches.length} parameter keys and ${params.length}` +
                  ` parameter values.\nKeys: ${matches}.\nValues: ${params}.`,
              )
            }
            subpath = matches.reduce(
              (path, match, i) => path.replace(match, params[i]),
              _,
            )
          } else {
            subpath = _ + subpath
          }
          path[key] = subpath
        }
      } else {
        updatePath(subpath, false)
      }
    })
  }

  const path = { ...subpaths, _, __: _ }
  if (_ === "") {
    path._ = "/"
  } else {
    updatePath(path, true)
  }
  return path
}
