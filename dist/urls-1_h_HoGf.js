import { j as d } from "./jsx-runtime-Dpn_P65e.js";
import { Stack as y, Typography as g, CircularProgress as m } from "@mui/material";
import "react";
import { b as S } from "./general-BJIOJXcG.js";
import "yup";
import { SyncProblem as b } from "@mui/icons-material";
const j = () => /* @__PURE__ */ d.jsxs(y, { alignItems: "center", alignContent: "center", children: [
  /* @__PURE__ */ d.jsx(b, { color: "error" }),
  /* @__PURE__ */ d.jsx(g, { color: "error.main", children: "Failed to sync data" })
] });
function A(r, e) {
  if (e.url && Object.entries(e.url).forEach(([n, i]) => {
    r = r.replace(`<${n}>`, String(i));
  }), e.search) {
    const n = [];
    for (const i in e.search) {
      const a = e.search[i];
      if (a !== void 0)
        if (Array.isArray(a))
          for (const o of a) n.push([i, String(o)]);
        else
          n.push([i, String(a)]);
    }
    n.length !== 0 && (r += `?${new URLSearchParams(n).toString()}`);
  }
  return r;
}
function l(r) {
  return typeof r == "number" || typeof r == "string";
}
function h(r) {
  return { type: r, id: "LIST" };
}
function x(r, e) {
  const {
    includeListTag: n = !1,
    argKeysAreIds: i = !1,
    id: a = "id"
  } = e || {};
  function o(t, f = n) {
    const s = t.map((p) => ({ type: r, id: String(p) }));
    return f && s.push(h(r)), s;
  }
  function u(t) {
    return S(t, a);
  }
  return (t, f, s) => {
    if (!f) {
      if (s) {
        if (l(s)) return o([s]);
        if (Array.isArray(s)) {
          if (s.length && l(s[0]))
            return o(s);
        } else if (typeof s == "object" && i)
          return o(Object.keys(s));
      }
      if (t)
        return Array.isArray(t) ? o(t.map(u)) : u(t) !== void 0 ? o([u(t)]) : o(t.data.map(u), !0);
    }
    return o([]);
  };
}
function c(r, e) {
  if (r === e) throw Error("List and detail are the same.");
  return { list: r, detail: e };
}
function E(r, e, n) {
  const { data: i, isLoading: a, isSuccess: o } = r, u = r.error, {
    loading: t = /* @__PURE__ */ d.jsx(m, {}),
    error: f = /* @__PURE__ */ d.jsx(j, {})
  } = n || {};
  if (u)
    return console.error(u), f;
  if (a) return t;
  if (i) return e(i);
  if (o) throw Error("Expected to get data from API but got nothing.");
  return t;
}
function T(r) {
  return ["GET", "HEAD", "OPTIONS", "TRACE"].includes(r.toUpperCase());
}
const C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buildUrl: A,
  handleResultState: E,
  isModelId: l,
  isSafeHttpMethod: T,
  listTag: h,
  modelUrls: c,
  tagData: x
}, Symbol.toStringTag, { value: "Module" })), M = {
  user: c("users/", "users/<id>/"),
  teacher: c("users/teachers/", "users/teachers/<id>/"),
  student: c("users/students/", "users/students/<id>/"),
  school: c("schools/", "schools/<id>/"),
  class: c("classes/", "classes/<id>/"),
  otpBypassToken: c("otp-bypass-tokens/", "otp-bypass-tokens/<id>/"),
  authFactor: c("auth-factors/", "auth-factors/<id>/")
};
export {
  j as S,
  C as a,
  A as b,
  E as h,
  T as i,
  x as t,
  M as u
};
//# sourceMappingURL=urls-1_h_HoGf.js.map
