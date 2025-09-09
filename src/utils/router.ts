import {
  type To,
  type LinkProps as _LinkProps,
  generatePath,
} from "react-router"

import { type PageState } from "../components/page/Page"

export type LinkProps<
  Override extends "delta" | "to",
  State extends Record<string, any> = Record<string, any>,
> = Omit<_LinkProps, "to" | "state"> &
  (Override extends "delta"
    ? { to: number }
    : { to: To; state?: State & Partial<PageState> })

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
  function updatePath(path: Path, root: boolean, params?: Parameters) {
    if (typeof path.__ === "object") {
      params = params ? { ...params, ...path.__ } : path.__
    }

    const _path = typeof _ === "string" && params ? generatePath(_, params) : _

    Object.entries(path).forEach(([key, subpath]) => {
      if (key !== "__") {
        subpath = subpath as string | Path
        if (typeof subpath === "string") {
          if (typeof _path === "string" && (!root || key !== "_")) {
            let __path = _path + subpath
            if (__path.endsWith("/")) __path = __path.slice(0, -1)
            path[key] = __path
          }
        } else {
          updatePath(subpath, false, params)
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

export function getParam(path: Path, key: string) {
  return (path.__ as Parameters)[key]
}
