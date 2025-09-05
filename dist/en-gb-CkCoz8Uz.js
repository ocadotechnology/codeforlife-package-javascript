import { useState as S } from "react";
import { ValidationError as Y } from "yup";
import { f as j, h as D, j as m } from "./urls-CidH8aI9.js";
import L from "dayjs";
function A(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function J(t) {
  const { page: n = 0, limit: e = 150 } = t || {}, [a, r] = S({
    page: n,
    limit: e,
    offset: n * e
  });
  return [a, (i) => {
    r(({ page: s, limit: o }) => {
      const u = typeof i == "function" ? i({ page: s, limit: o }) : i;
      let f = u.page;
      const l = u.limit;
      return l !== o && (f = 0), { page: f, limit: l, offset: f * l };
    });
  }];
}
function p(t) {
  return typeof t == "object" && t !== null && "status" in t && t.status === 400 && "data" in t && typeof t.data == "object" && t.data !== null;
}
function h(t, n) {
  if (!p(t)) throw t;
  const e = Object.fromEntries(
    Object.entries(t.data).map(([a, r]) => (Array.isArray(r) && (r = r.join(". ")), [a, r]))
  );
  n(e);
}
function T(t, n, e) {
  const {
    include: a,
    onlyDirtyValues: r = !1,
    then: _,
    catch: i,
    finally: s
  } = e || {};
  let { exclude: o = [] } = e || {};
  return (u, f) => {
    let l = e && e.clean ? e.clean(u) : u;
    r && (o = [
      ...o,
      ...b(u, n).filter(
        (c) => !o.includes(c)
      )
    ]), a && (o = o.filter((c) => !a.includes(c))), o.length && (l = j(l, o)), t(l).unwrap().then((c) => {
      _ && _(c, u, f);
    }).catch((c) => {
      i && i(c, u, f), h(c, f.setErrors);
    }).finally(() => {
      s && s(u, f);
    });
  };
}
function w(t, n) {
  return async (e) => {
    try {
      await t.validate(e, n);
    } catch (a) {
      if (a instanceof Y)
        return a.errors.join(". ");
      throw a;
    }
  };
}
function M(t, n, e) {
  return e || (e = D(t)), Object.fromEntries(
    e.map((a) => [a, g(t, n, a)])
  );
}
function g(t, n, e) {
  const a = m(t, e), r = m(n, e);
  return a !== r;
}
function b(t, n, e) {
  return Object.entries(M(t, n, e)).filter(
    ([
      a,
      // eslint-disable-line @typescript-eslint/no-unused-vars
      r
    ]) => !r
  ).map(([a]) => a);
}
const k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getCleanNames: b,
  getDirty: M,
  isDirty: g,
  isFormError: p,
  schemaToFieldValidator: w,
  setFormErrors: h,
  submitForm: T
}, Symbol.toStringTag, { value: "Module" }));
var d = { exports: {} }, F = d.exports, y;
function O() {
  return y || (y = 1, (function(t, n) {
    (function(e, a) {
      t.exports = a(L);
    })(F, (function(e) {
      function a(i) {
        return i && typeof i == "object" && "default" in i ? i : { default: i };
      }
      var r = a(e), _ = { name: "en-gb", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(i) {
        var s = ["th", "st", "nd", "rd"], o = i % 100;
        return "[" + i + (s[(o - 20) % 10] || s[o] || s[0]) + "]";
      } };
      return r.default.locale(_, null, !0), _;
    }));
  })(d)), d.exports;
}
O();
export {
  T as a,
  k as f,
  A as g,
  w as s,
  J as u
};
//# sourceMappingURL=en-gb-CkCoz8Uz.js.map
