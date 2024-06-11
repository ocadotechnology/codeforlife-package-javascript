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
        if (!root || key !== "_") path[key] = _ + subpath
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
