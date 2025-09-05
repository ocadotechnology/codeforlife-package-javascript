import m from "js-cookie";
import { a as y, d as S } from "./general-DsmN0W6Q.js";
import { buildCreateSlice as I, asyncThunkCreator as b } from "@reduxjs/toolkit";
import { j as f } from "./jsx-runtime-Dpn_P65e.js";
import { Stack as A, Typography as E, CircularProgress as T } from "@mui/material";
import "react";
import "yup";
import { SyncProblem as j } from "@mui/icons-material";
const L = I({
  creators: { asyncThunk: b }
}), k = {
  isLoggedIn: !!m.get(y)
}, g = L({
  name: "session",
  initialState: k,
  reducers: (e) => ({
    login: e.reducer((r) => {
      r.isLoggedIn = !0;
    }),
    logout: e.reducer((r) => {
      r.isLoggedIn = !1;
    })
  }),
  selectors: {
    selectIsLoggedIn: (e) => e.isLoggedIn
  }
}), { login: F, logout: H } = g.actions, { selectIsLoggedIn: K } = g.selectors, x = () => /* @__PURE__ */ f.jsxs(A, { alignItems: "center", alignContent: "center", children: [
  /* @__PURE__ */ f.jsx(j, { color: "error" }),
  /* @__PURE__ */ f.jsx(E, { color: "error.main", children: "Failed to sync data" })
] });
function O(e, r) {
  if (r.url && Object.entries(r.url).forEach(([n, i]) => {
    e = e.replace(`<${n}>`, String(i));
  }), r.search) {
    const n = [];
    for (const i in r.search) {
      const a = r.search[i];
      if (a !== void 0)
        if (Array.isArray(a))
          for (const o of a) n.push([i, String(o)]);
        else
          n.push([i, String(a)]);
    }
    n.length !== 0 && (e += `?${new URLSearchParams(n).toString()}`);
  }
  return e;
}
function l(e) {
  return typeof e == "number" || typeof e == "string";
}
function h(e) {
  return { type: e, id: "LIST" };
}
function C(e, r) {
  const {
    includeListTag: n = !1,
    argKeysAreIds: i = !1,
    id: a = "id"
  } = r || {};
  function o(t, d = n) {
    const s = t.map((p) => ({ type: e, id: String(p) }));
    return d && s.push(h(e)), s;
  }
  function u(t) {
    return S(t, a);
  }
  return (t, d, s) => {
    if (!d) {
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
function c(e, r) {
  if (e === r) throw Error("List and detail are the same.");
  return { list: e, detail: r };
}
function P(e, r, n) {
  const { data: i, isLoading: a, isSuccess: o } = e, u = e.error, {
    loading: t = /* @__PURE__ */ f.jsx(T, {}),
    error: d = /* @__PURE__ */ f.jsx(x, {})
  } = n || {};
  if (u)
    return console.error(u), d;
  if (a) return t;
  if (i) return r(i);
  if (o) throw Error("Expected to get data from API but got nothing.");
  return t;
}
function _(e) {
  return ["GET", "HEAD", "OPTIONS", "TRACE"].includes(e.toUpperCase());
}
const $ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  buildUrl: O,
  handleResultState: P,
  isModelId: l,
  isSafeHttpMethod: _,
  listTag: h,
  modelUrls: c,
  tagData: C
}, Symbol.toStringTag, { value: "Module" })), z = {
  user: c("users/", "users/<id>/"),
  teacher: c("users/teachers/", "users/teachers/<id>/"),
  student: c("users/students/", "users/students/<id>/"),
  school: c("schools/", "schools/<id>/"),
  class: c("classes/", "classes/<id>/"),
  otpBypassToken: c("otp-bypass-tokens/", "otp-bypass-tokens/<id>/"),
  authFactor: c("auth-factors/", "auth-factors/<id>/")
};
export {
  x as S,
  F as a,
  O as b,
  $ as c,
  L as d,
  g as e,
  P as h,
  _ as i,
  H as l,
  K as s,
  C as t,
  z as u
};
//# sourceMappingURL=urls-Bl1eUttT.js.map
