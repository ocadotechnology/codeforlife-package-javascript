export function openInNewTab(url: string, target = '_blank'): void {
  window.open(url, target);
}

export function wrap(
  newFn: {
    before?: (...args: any[]) => void,
    after?: (...args: any[]) => void
  },
  fn?: (...args: any[]) => any
): (...args: any[]) => any {
  return (...args) => {
    if (newFn.before !== undefined) {
      newFn.before(...args);
    }
    let value;
    if (fn !== undefined) {
      value = fn(...args);
    }
    if (newFn.after !== undefined) {
      newFn.after(...args);
    }
    return value;
  };
}

export interface Path {
  _: string;
  [subpath: string]: string | Path;
};

export function path<
  Subpaths extends Record<string, Path>
>(
  _: string,
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  subpaths: Subpaths = {} as Subpaths
): Path & Subpaths {
  function updatePath(path: Path, root: boolean): void {
    Object.entries(path).forEach(([key, subpath]) => {
      if (typeof subpath === 'string') {
        if (!root || key !== '_') path[key] = _ + subpath;
      } else {
        updatePath(subpath, false);
      }
    });
  }

  const path = { ...subpaths, _ };
  if (_ === '') {
    path._ = '/';
  } else {
    updatePath(path, true);
  }
  return path;
}
