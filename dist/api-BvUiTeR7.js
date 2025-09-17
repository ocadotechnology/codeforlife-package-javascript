import { j as u } from "./jsx-runtime-C7wFtzyj.js";
import { Stack as h, Typography as m, CircularProgress as p } from "@mui/material";
import "react";
import { getNestedProperty as g } from "./utils/general.es.js";
import "yup";
import { SyncProblem as y } from "@mui/icons-material";
const S = () => /* @__PURE__ */ u.jsxs(h, { alignItems: "center", alignContent: "center", children: [
  /* @__PURE__ */ u.jsx(y, { color: "error" }),
  /* @__PURE__ */ u.jsx(m, { color: "error.main", children: "Failed to sync data" })
] });
function T(r, e) {
  if (e.url && Object.entries(e.url).forEach(([i, s]) => {
    r = r.replace(`<${i}>`, String(s));
  }), e.search) {
    const i = [];
    for (const s in e.search) {
      const a = e.search[s];
      if (a !== void 0)
        if (Array.isArray(a))
          for (const o of a) i.push([s, String(o)]);
        else
          i.push([s, String(a)]);
    }
    i.length !== 0 && (r += `?${new URLSearchParams(i).toString()}`);
  }
  return r;
}
function d(r) {
  return typeof r == "number" || typeof r == "string";
}
function j(r) {
  return { type: r, id: "LIST" };
}
function L(r, e) {
  const {
    includeListTag: i = !1,
    argKeysAreIds: s = !1,
    id: a = "id"
  } = e || {};
  function o(t, f = i) {
    const n = t.map((l) => ({ type: r, id: String(l) }));
    return f && n.push(j(r)), n;
  }
  function c(t) {
    return g(t, a);
  }
  return (t, f, n) => {
    if (!f) {
      if (n) {
        if (d(n)) return o([n]);
        if (Array.isArray(n)) {
          if (n.length && d(n[0]))
            return o(n);
        } else if (typeof n == "object" && s)
          return o(Object.keys(n));
      }
      if (t)
        return Array.isArray(t) ? o(t.map(c)) : c(t) !== void 0 ? o([c(t)]) : o(t.data.map(c), !0);
    }
    return o([]);
  };
}
function C(r, e) {
  if (r === e) throw Error("List and detail are the same.");
  return { list: r, detail: e };
}
function N(r, e, i) {
  const { data: s, isLoading: a, isSuccess: o } = r, c = r.error, {
    loading: t = /* @__PURE__ */ u.jsx(p, {}),
    error: f = /* @__PURE__ */ u.jsx(S, {})
  } = i || {};
  if (c)
    return console.error(c), f;
  if (a) return t;
  if (s) return e(s);
  if (o) throw Error("Expected to get data from API but got nothing.");
  return t;
}
function O(r) {
  return ["GET", "HEAD", "OPTIONS", "TRACE"].includes(r.toUpperCase());
}
export {
  S,
  d as a,
  T as b,
  N as h,
  O as i,
  j as l,
  C as m,
  L as t
};
//# sourceMappingURL=api-BvUiTeR7.js.map
