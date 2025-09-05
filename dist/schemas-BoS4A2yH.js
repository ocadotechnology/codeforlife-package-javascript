import * as e from "yup";
import { number as b, string as O, ValidationError as y } from "yup";
import { U as A, C } from "./general-DO-KrNo5.js";
import "./jsx-runtime-XvoU0p7t.js";
import "@mui/material";
import "react";
import "@mui/icons-material";
function c(s = b()) {
  return s.min(1);
}
function w(s, n, o = {}) {
  const { schema: a = O(), flags: i } = o;
  return a.matches(new RegExp(`^[${s}]*$`, i), n);
}
function p(s, n, o = {}) {
  const { spaces: a = !1, specialChars: i, ...d } = o;
  let m = `can only contain: ${n}`;
  return a && (s += " ", m += ", spaces"), i && (s += i, m += `, special characters (${i})`), w(s, m, d);
}
function v(s, n, o = {}) {
  let { flags: a = "u" } = o;
  return a.includes("u") || (a += "u"), p(s, n, { ...o, flags: a });
}
function U(s) {
  return p(
    "a-z0-9",
    "lowercase ASCII alphanumeric characters (a-z, 0-9)",
    s
  );
}
function k(s) {
  return p(
    "A-Z0-9",
    "uppercase ASCII alphanumeric characters (A-Z, 0-9)",
    s
  );
}
function h(s) {
  return v(
    "\\p{L}\\p{N}",
    "unicode alphanumeric characters",
    s
  );
}
function Q(s, n, o) {
  const { onError: a, ...i } = o || {};
  try {
    return n.validateSync(s, i);
  } catch (d) {
    if (d instanceof y) {
      if (a) return a(d);
    } else throw d;
  }
}
const r = {
  user: c(),
  teacher: c(),
  student: c(),
  school: c(),
  klass: k().length(5),
  authFactor: c(),
  otpBypassToken: c()
}, u = {
  id: r.teacher.required(),
  school: r.school,
  is_admin: e.bool().required()
}, f = {
  id: r.student.required(),
  school: r.school.required(),
  klass: r.klass.required(),
  auto_gen_password: e.string().required()
}, t = {
  id: r.user.required(),
  requesting_to_join_class: r.klass,
  first_name: h({
    spaces: !0,
    specialChars: "-'"
  }).required().max(150),
  last_name: h({
    spaces: !0,
    specialChars: "-'"
  }).max(150),
  last_login: e.date(),
  email: e.string().email(),
  password: e.string().required(),
  is_staff: e.bool().required(),
  is_active: e.bool().required(),
  date_joined: e.date().required(),
  teacher: e.object(u).optional(),
  student: e.object(f).optional()
}, _ = {
  ...t,
  password: t.password.min(10, "must be at least 10 characters long").matches(/[A-Z]/, "must contain at least one uppercase letter").matches(/[a-z]/, "must contain at least one lowercase letter").matches(/[0-9]/, "must contain at least one digit").matches(
    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
    "must contain at least one special character"
  ),
  email: t.email.required(),
  last_name: t.last_name.required(),
  teacher: t.teacher.required(),
  student: e.string().oneOf([void 0])
}, l = {
  ...u,
  school: u.school.required()
}, q = {
  ..._,
  teacher: e.object(l)
}, g = {
  ...l,
  is_admin: l.is_admin.isTrue()
}, j = {
  ...q,
  teacher: e.object(g)
}, S = {
  ...l,
  is_admin: l.is_admin.isFalse()
}, I = {
  ...q,
  teacher: e.object(S)
}, T = {
  ...u,
  school: e.string().oneOf([void 0]),
  is_admin: u.is_admin.isFalse()
}, x = {
  ..._,
  teacher: e.object(T)
}, z = {
  ...t,
  password: t.password.min(6, "must be at least 6 characters long"),
  email: t.email.oneOf([void 0]),
  last_name: t.last_name.oneOf([void 0]),
  teacher: e.string().oneOf([void 0]),
  student: t.student.required()
}, E = {
  ...t,
  password: t.password.min(8, "must be at least 8 characters long").matches(/[A-Z]/, "must contain at least one uppercase letter").matches(/[a-z]/, "must contain at least one lowercase letter").matches(/[0-9]/, "must contain at least one digit"),
  email: t.email.required(),
  last_name: t.last_name.required(),
  teacher: e.string().oneOf([void 0]),
  student: e.string().oneOf([void 0])
}, F = {
  ...u,
  user: r.user.required()
}, N = {
  ...l,
  user: r.user.required()
}, $ = {
  ...g,
  user: r.user.required()
}, Z = {
  ...S,
  user: r.user.required()
}, B = {
  ...T,
  user: r.user.required()
}, R = {
  ...f,
  user: r.user.required()
}, V = {
  id: r.school.required(),
  name: h({
    spaces: !0,
    specialChars: "'."
  }).required().max(200),
  country: e.string().oneOf(C),
  uk_county: e.string().oneOf(A)
}, D = {
  id: r.klass.required(),
  teacher: r.teacher.required(),
  school: r.school.required(),
  name: h({
    spaces: !0,
    specialChars: "-_"
  }).required().max(200),
  read_classmates_data: e.bool().required(),
  receive_requests_until: e.date()
}, K = {
  id: r.authFactor.required(),
  user: r.user.required(),
  type: e.string().oneOf(["otp"]).required()
}, L = {
  id: r.otpBypassToken.required(),
  user: r.user.required(),
  token: U().required().length(8)
}, W = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  adminSchoolTeacher: $,
  adminSchoolTeacherUser: j,
  authFactor: K,
  indyUser: E,
  klass: D,
  nonAdminSchoolTeacher: Z,
  nonAdminSchoolTeacherUser: I,
  nonSchoolTeacher: B,
  nonSchoolTeacherUser: x,
  otpBypassToken: L,
  school: V,
  schoolTeacher: N,
  schoolTeacherUser: q,
  student: R,
  studentUser: z,
  teacher: F,
  teacherUser: _,
  user: t
}, Symbol.toStringTag, { value: "Module" }));
export {
  W as s,
  Q as t,
  t as u
};
//# sourceMappingURL=schemas-BoS4A2yH.js.map
