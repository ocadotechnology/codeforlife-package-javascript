import * as r from "yup";
import { number as C, string as y, ValidationError as I } from "yup";
import { U, d as v } from "./urls-CidH8aI9.js";
import "./jsx-runtime-Dpn_P65e.js";
import "@mui/material";
import "react";
import "@mui/icons-material";
function l(e = C()) {
  return e.min(1);
}
function S(e, i, c = {}) {
  const { schema: s = y(), flags: u } = c;
  return s.matches(new RegExp(`^[${e}]*$`, u), i);
}
function n(e, i, c = {}) {
  const { spaces: s = !1, specialChars: u, ...p } = c;
  let f = `can only contain: ${i}`;
  return s && (e += " ", f += ", spaces"), u && (e += u, f += `, special characters (${u})`), S(e, f, p);
}
function o(e, i, c = {}) {
  let { flags: s = "u" } = c;
  return s.includes("u") || (s += "u"), n(e, i, { ...c, flags: s });
}
function j(e) {
  return n("a-zA-Z", "ASCII alpha characters (a-z, A-Z)", e);
}
function z(e) {
  return n("a-z", "lowercase ASCII alpha characters (a-z)", e);
}
function k(e) {
  return n("A-Z", "uppercase ASCII alpha characters (A-Z)", e);
}
function N(e) {
  return n("0-9", "ASCII numbers (0-9)", e);
}
function Z(e) {
  return n(
    "a-zA-Z0-9",
    "ASCII alphanumeric characters (a-z, A-Z, 0-9)",
    e
  );
}
function q(e) {
  return n(
    "a-z0-9",
    "lowercase ASCII alphanumeric characters (a-z, 0-9)",
    e
  );
}
function A(e) {
  return n(
    "A-Z0-9",
    "uppercase ASCII alphanumeric characters (A-Z, 0-9)",
    e
  );
}
function x(e) {
  return o("\\p{L}", "unicode alpha characters", e);
}
function L(e) {
  return o(
    "\\p{Ll}",
    "lowercase unicode alpha characters",
    e
  );
}
function E(e) {
  return o(
    "\\p{Lu}",
    "uppercase unicode alpha characters",
    e
  );
}
function F(e) {
  return o("\\p{N}", "unicode numbers", e);
}
function m(e) {
  return o(
    "\\p{L}\\p{N}",
    "unicode alphanumeric characters",
    e
  );
}
function $(e) {
  return o(
    "\\p{Ll}\\p{N}",
    "lowercase unicode alphanumeric characters",
    e
  );
}
function B(e) {
  return o(
    "\\p{Lu}\\p{N}",
    "uppercase unicode alphanumeric characters",
    e
  );
}
function M(e, i, c) {
  const { onError: s, ...u } = c || {};
  try {
    return i.validateSync(e, u);
  } catch (p) {
    if (p instanceof I) {
      if (s) return s(p);
    } else throw p;
  }
}
const ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  asciiAlphaString: j,
  asciiAlphanumericString: Z,
  asciiNumericString: N,
  buildCharSet: n,
  buildUnicodeCharSet: o,
  lowercaseAsciiAlphaString: z,
  lowercaseAsciiAlphanumericString: q,
  lowercaseUnicodeAlphaString: L,
  lowercaseUnicodeAlphanumericString: $,
  matchesCharSet: S,
  numericId: l,
  tryValidateSync: M,
  unicodeAlphaString: x,
  unicodeAlphanumericString: m,
  unicodeNumericString: F,
  uppercaseAsciiAlphaString: k,
  uppercaseAsciiAlphanumericString: A,
  uppercaseUnicodeAlphaString: E,
  uppercaseUnicodeAlphanumericString: B
}, Symbol.toStringTag, { value: "Module" })), a = {
  user: l(),
  teacher: l(),
  student: l(),
  school: l(),
  klass: A().length(5),
  authFactor: l(),
  otpBypassToken: l()
}, d = {
  id: a.teacher.required(),
  school: a.school,
  is_admin: r.bool().required()
}, b = {
  id: a.student.required(),
  school: a.school.required(),
  klass: a.klass.required(),
  auto_gen_password: r.string().required()
}, t = {
  id: a.user.required(),
  requesting_to_join_class: a.klass,
  first_name: m({
    spaces: !0,
    specialChars: "-'"
  }).required().max(150),
  last_name: m({
    spaces: !0,
    specialChars: "-'"
  }).max(150),
  last_login: r.date(),
  email: r.string().email(),
  password: r.string().required(),
  is_staff: r.bool().required(),
  is_active: r.bool().required(),
  date_joined: r.date().required(),
  teacher: r.object(d).optional(),
  student: r.object(b).optional()
}, _ = {
  ...t,
  password: t.password.min(10, "must be at least 10 characters long").matches(/[A-Z]/, "must contain at least one uppercase letter").matches(/[a-z]/, "must contain at least one lowercase letter").matches(/[0-9]/, "must contain at least one digit").matches(
    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
    "must contain at least one special character"
  ),
  email: t.email.required(),
  last_name: t.last_name.required(),
  teacher: t.teacher.required(),
  student: r.string().oneOf([void 0])
}, h = {
  ...d,
  school: d.school.required()
}, g = {
  ..._,
  teacher: r.object(h)
}, T = {
  ...h,
  is_admin: h.is_admin.isTrue()
}, P = {
  ...g,
  teacher: r.object(T)
}, w = {
  ...h,
  is_admin: h.is_admin.isFalse()
}, R = {
  ...g,
  teacher: r.object(w)
}, O = {
  ...d,
  school: r.string().oneOf([void 0]),
  is_admin: d.is_admin.isFalse()
}, V = {
  ..._,
  teacher: r.object(O)
}, D = {
  ...t,
  password: t.password.min(6, "must be at least 6 characters long"),
  email: t.email.oneOf([void 0]),
  last_name: t.last_name.oneOf([void 0]),
  teacher: r.string().oneOf([void 0]),
  student: t.student.required()
}, K = {
  ...t,
  password: t.password.min(8, "must be at least 8 characters long").matches(/[A-Z]/, "must contain at least one uppercase letter").matches(/[a-z]/, "must contain at least one lowercase letter").matches(/[0-9]/, "must contain at least one digit"),
  email: t.email.required(),
  last_name: t.last_name.required(),
  teacher: r.string().oneOf([void 0]),
  student: r.string().oneOf([void 0])
}, Y = {
  ...d,
  user: a.user.required()
}, G = {
  ...h,
  user: a.user.required()
}, H = {
  ...T,
  user: a.user.required()
}, J = {
  ...w,
  user: a.user.required()
}, Q = {
  ...O,
  user: a.user.required()
}, W = {
  ...b,
  user: a.user.required()
}, X = {
  id: a.school.required(),
  name: m({
    spaces: !0,
    specialChars: "'."
  }).required().max(200),
  country: r.string().oneOf(v),
  uk_county: r.string().oneOf(U)
}, ee = {
  id: a.klass.required(),
  teacher: a.teacher.required(),
  school: a.school.required(),
  name: m({
    spaces: !0,
    specialChars: "-_"
  }).required().max(200),
  read_classmates_data: r.bool().required(),
  receive_requests_until: r.date()
}, re = {
  id: a.authFactor.required(),
  user: a.user.required(),
  type: r.string().oneOf(["otp"]).required()
}, ae = {
  id: a.otpBypassToken.required(),
  user: a.user.required(),
  token: q().required().length(8)
}, le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adminSchoolTeacher: H,
  adminSchoolTeacherUser: P,
  authFactor: re,
  indyUser: K,
  klass: ee,
  nonAdminSchoolTeacher: J,
  nonAdminSchoolTeacherUser: R,
  nonSchoolTeacher: Q,
  nonSchoolTeacherUser: V,
  otpBypassToken: ae,
  school: X,
  schoolTeacher: G,
  schoolTeacherUser: g,
  student: W,
  studentUser: D,
  teacher: Y,
  teacherUser: _,
  user: t
}, Symbol.toStringTag, { value: "Module" }));
export {
  ue as a,
  le as s,
  M as t,
  t as u
};
//# sourceMappingURL=schemas-shENJqrs.js.map
