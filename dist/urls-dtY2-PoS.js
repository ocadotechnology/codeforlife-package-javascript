import { j as d } from "./jsx-runtime-XvoU0p7t.js";
import { Stack as p, Typography as y, CircularProgress as m } from "@mui/material";
import "react";
import { a as g } from "./general-DO-KrNo5.js";
import "yup";
import { SyncProblem as S } from "@mui/icons-material";
const b = () => /* @__PURE__ */ d.jsxs(p, { alignItems: "center", alignContent: "center", children: [
  /* @__PURE__ */ d.jsx(S, { color: "error" }),
  /* @__PURE__ */ d.jsx(y, { color: "error.main", children: "Failed to sync data" })
] });
function k(r, e) {
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
function h(r) {
  return typeof r == "number" || typeof r == "string";
}
function j(r) {
  return { type: r, id: "LIST" };
}
function L(r, e) {
  const {
    includeListTag: n = !1,
    argKeysAreIds: i = !1,
    id: a = "id"
  } = e || {};
  function o(t, f = n) {
    const s = t.map((l) => ({ type: r, id: String(l) }));
    return f && s.push(j(r)), s;
  }
  function c(t) {
    return g(t, a);
  }
  return (t, f, s) => {
    if (!f) {
      if (s) {
        if (h(s)) return o([s]);
        if (Array.isArray(s)) {
          if (s.length && h(s[0]))
            return o(s);
        } else if (typeof s == "object" && i)
          return o(Object.keys(s));
      }
      if (t)
        return Array.isArray(t) ? o(t.map(c)) : c(t) !== void 0 ? o([c(t)]) : o(t.data.map(c), !0);
    }
    return o([]);
  };
}
function u(r, e) {
  if (r === e) throw Error("List and detail are the same.");
  return { list: r, detail: e };
}
function C(r, e, n) {
  const { data: i, isLoading: a, isSuccess: o } = r, c = r.error, {
    loading: t = /* @__PURE__ */ d.jsx(m, {}),
    error: f = /* @__PURE__ */ d.jsx(b, {})
  } = n || {};
  if (c)
    return console.error(c), f;
  if (a) return t;
  if (i) return e(i);
  if (o) throw Error("Expected to get data from API but got nothing.");
  return t;
}
function N(r) {
  return ["GET", "HEAD", "OPTIONS", "TRACE"].includes(r.toUpperCase());
}
const O = {
  user: u("users/", "users/<id>/"),
  teacher: u("users/teachers/", "users/teachers/<id>/"),
  student: u("users/students/", "users/students/<id>/"),
  school: u("schools/", "schools/<id>/"),
  class: u("classes/", "classes/<id>/"),
  otpBypassToken: u("otp-bypass-tokens/", "otp-bypass-tokens/<id>/"),
  authFactor: u("auth-factors/", "auth-factors/<id>/")
};
export {
  b as S,
  k as b,
  C as h,
  N as i,
  L as t,
  O as u
};
//# sourceMappingURL=urls-dtY2-PoS.js.map
