import { ValidationError as p } from "yup";
import { e as _, c as O, d as y } from "./general-DsmN0W6Q.js";
function D(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function m(t) {
  return typeof t == "object" && t !== null && "status" in t && t.status === 400 && "data" in t && typeof t.data == "object" && t.data !== null;
}
function j(t, a) {
  if (!m(t)) throw t;
  const e = Object.fromEntries(
    Object.entries(t.data).map(([n, i]) => (Array.isArray(i) && (i = i.join(". ")), [n, i]))
  );
  a(e);
}
function E(t, a, e) {
  const {
    include: n,
    onlyDirtyValues: i = !1,
    then: u,
    catch: s,
    finally: d
  } = e || {};
  let { exclude: r = [] } = e || {};
  return (f, l) => {
    let o = e && e.clean ? e.clean(f) : f;
    i && (r = [
      ...r,
      ...h(f, a).filter(
        (c) => !r.includes(c)
      )
    ]), n && (r = r.filter((c) => !n.includes(c))), r.length && (o = _(o, r)), t(o).unwrap().then((c) => {
      u && u(c, f, l);
    }).catch((c) => {
      s && s(c, f, l), j(c, l.setErrors);
    }).finally(() => {
      d && d(f, l);
    });
  };
}
function w(t, a) {
  return async (e) => {
    try {
      await t.validate(e, a);
    } catch (n) {
      if (n instanceof p)
        return n.errors.join(". ");
      throw n;
    }
  };
}
function b(t, a, e) {
  return e || (e = O(t)), Object.fromEntries(
    e.map((n) => [n, g(t, a, n)])
  );
}
function g(t, a, e) {
  const n = y(t, e), i = y(a, e);
  return n !== i;
}
function h(t, a, e) {
  return Object.entries(b(t, a, e)).filter(
    ([
      n,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      i
    ]) => !i
  ).map(([n]) => n);
}
const V = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCleanNames: h,
  getDirty: b,
  isDirty: g,
  isFormError: m,
  schemaToFieldValidator: w,
  setFormErrors: j,
  submitForm: E
}, Symbol.toStringTag, { value: "Module" }));
export {
  E as a,
  V as f,
  D as g,
  w as s
};
//# sourceMappingURL=form-BuXLMyrd.js.map
