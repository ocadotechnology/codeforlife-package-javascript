function u(i, n) {
  return Object.values(i).flatMap(
    (e) => n(e) ? [e] : typeof e == "object" && e !== null ? u(e, n) : []
  );
}
function y(i) {
  return u(
    i,
    (n) => typeof n == "number"
  );
}
function j(i) {
  return u(
    i,
    (n) => typeof n == "string"
  );
}
function p(i, n) {
  typeof n == "string" && (n = n.split("."));
  let e = i;
  for (let r = 0; r < n.length; r++)
    if (e = e[n[r]], r !== n.length - 1 && (typeof e != "object" || e === null))
      return;
  return e;
}
function b(i, n = ".") {
  function e(r, s) {
    return Object.fromEntries(
      Object.entries(r).map(([o, t]) => {
        const f = [...s, o];
        return typeof t == "object" && t !== null && (t = e(t, f)), [f.join(n), t];
      })
    );
  }
  return e(i, []);
}
function l(i, n = ".") {
  function e(r, s) {
    return Object.entries(r).map(([o, t]) => {
      const f = [...s, o], c = f.join(n);
      return typeof t == "object" && t !== null ? [c, ...e(t, f)] : [c];
    }).flat();
  }
  return e(i, []);
}
function g(i, n, e = ".") {
  function r(s, o) {
    return Object.fromEntries(
      Object.entries(s).map(([t, f]) => {
        const c = [...o, t];
        return typeof f == "object" && f !== null && !(f instanceof Date) && (f = r(f, c)), n.includes(c.join(e)) ? [] : [t, f];
      }).filter((t) => t.length)
    );
  }
  return n.length ? r(i, []) : i;
}
function O(i, n = ".") {
  function e(r, s) {
    if (Array.isArray(r)) {
      const o = r.flatMap(
        (t) => typeof t == "object" && t !== null ? Object.entries(e(t, s)) : [[t, [...s, t].join(n)]]
      );
      return Object.fromEntries(o);
    }
    return Object.fromEntries(
      Object.entries(r).map(([o, t]) => {
        const f = [...s, o];
        return typeof t == "object" && t !== null ? t = e(t, f) : typeof t == "string" && (t = { [t]: [...f, t].join(n) }), [o, t];
      })
    );
  }
  return e(i, []);
}
function h(i) {
  const n = {};
  function e(r, s, o) {
    if (typeof s == "string")
      r[s] = o;
    else
      for (const [t, f] of Object.entries(s))
        t in r || (r[t] = {}), e(r[t], f, o);
  }
  for (const [r, s] of Object.entries(i)) {
    const o = Number(r), t = !isNaN(o) && r.trim() !== "" ? o : r;
    e(n, s, t);
  }
  return n;
}
export {
  h as createIdRegistry,
  O as createPathStrings,
  g as excludeKeyPaths,
  y as flattenNumberValues,
  j as flattenStringValues,
  l as getKeyPaths,
  p as getNestedProperty,
  b as withKeyPaths
};
//# sourceMappingURL=object.es.js.map
