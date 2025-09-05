import { useState as h } from "react";
import { ValidationError as _ } from "yup";
import { e as P, f as O, h as m } from "./urls-Cs55cfVl.js";
function S(t) {
  const { page: a = 0, limit: n = 150 } = t || {}, [i, e] = h({
    page: a,
    limit: n,
    offset: a * n
  });
  return [i, (s) => {
    e(({ page: u, limit: o }) => {
      const f = typeof s == "function" ? s({ page: u, limit: o }) : s;
      let c = f.page;
      const l = f.limit;
      return l !== o && (c = 0), { page: c, limit: l, offset: c * l };
    });
  }];
}
function A(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function y(t) {
  return typeof t == "object" && t !== null && "status" in t && t.status === 400 && "data" in t && typeof t.data == "object" && t.data !== null;
}
function d(t, a) {
  if (!y(t)) throw t;
  const n = Object.fromEntries(
    Object.entries(t.data).map(([i, e]) => (Array.isArray(e) && (e = e.join(". ")), [i, e]))
  );
  a(n);
}
function E(t, a, n) {
  const {
    include: i,
    onlyDirtyValues: e = !1,
    then: g,
    catch: s,
    finally: u
  } = n || {};
  let { exclude: o = [] } = n || {};
  return (f, c) => {
    let l = n && n.clean ? n.clean(f) : f;
    e && (o = [
      ...o,
      ...b(f, a).filter(
        (r) => !o.includes(r)
      )
    ]), i && (o = o.filter((r) => !i.includes(r))), o.length && (l = P(l, o)), t(l).unwrap().then((r) => {
      g && g(r, f, c);
    }).catch((r) => {
      s && s(r, f, c), d(r, c.setErrors);
    }).finally(() => {
      u && u(f, c);
    });
  };
}
function w(t, a) {
  return async (n) => {
    try {
      await t.validate(n, a);
    } catch (i) {
      if (i instanceof _)
        return i.errors.join(". ");
      throw i;
    }
  };
}
function p(t, a, n) {
  return n || (n = O(t)), Object.fromEntries(
    n.map((i) => [i, j(t, a, i)])
  );
}
function j(t, a, n) {
  const i = m(t, n), e = m(a, n);
  return i !== e;
}
function b(t, a, n) {
  return Object.entries(p(t, a, n)).filter(
    ([
      i,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      e
    ]) => !e
  ).map(([i]) => i);
}
const C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCleanNames: b,
  getDirty: p,
  isDirty: j,
  isFormError: y,
  schemaToFieldValidator: w,
  setFormErrors: d,
  submitForm: E
}, Symbol.toStringTag, { value: "Module" }));
export {
  E as a,
  C as f,
  A as g,
  w as s,
  S as u
};
//# sourceMappingURL=form-BvDvbYiq.js.map
