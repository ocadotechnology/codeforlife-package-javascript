import { number as p, string as o, ValidationError as l } from "yup";
function f(r = p()) {
  return r.min(1);
}
function h(r, c, n = {}) {
  const { schema: e = o(), flags: i } = n;
  return e.matches(new RegExp(`^[${r}]*$`, i), c);
}
function a(r, c, n = {}) {
  const { spaces: e = !1, specialChars: i, ...u } = n;
  let s = `can only contain: ${c}`;
  return e && (r += " ", s += ", spaces"), i && (r += i, s += `, special characters (${i})`), h(r, s, u);
}
function t(r, c, n = {}) {
  let { flags: e = "u" } = n;
  return e.includes("u") || (e += "u"), a(r, c, { ...n, flags: e });
}
function m(r) {
  return a("a-zA-Z", "ASCII alpha characters (a-z, A-Z)", r);
}
function S(r) {
  return a("a-z", "lowercase ASCII alpha characters (a-z)", r);
}
function d(r) {
  return a("A-Z", "uppercase ASCII alpha characters (A-Z)", r);
}
function g(r) {
  return a("0-9", "ASCII numbers (0-9)", r);
}
function I(r) {
  return a(
    "a-zA-Z0-9",
    "ASCII alphanumeric characters (a-z, A-Z, 0-9)",
    r
  );
}
function C(r) {
  return a(
    "a-z0-9",
    "lowercase ASCII alphanumeric characters (a-z, 0-9)",
    r
  );
}
function w(r) {
  return a(
    "A-Z0-9",
    "uppercase ASCII alphanumeric characters (A-Z, 0-9)",
    r
  );
}
function z(r) {
  return t("\\p{L}", "unicode alpha characters", r);
}
function Z(r) {
  return t(
    "\\p{Ll}",
    "lowercase unicode alpha characters",
    r
  );
}
function L(r) {
  return t(
    "\\p{Lu}",
    "uppercase unicode alpha characters",
    r
  );
}
function N(r) {
  return t("\\p{N}", "unicode numbers", r);
}
function b(r) {
  return t(
    "\\p{L}\\p{N}",
    "unicode alphanumeric characters",
    r
  );
}
function y(r) {
  return t(
    "\\p{Ll}\\p{N}",
    "lowercase unicode alphanumeric characters",
    r
  );
}
function U(r) {
  return t(
    "\\p{Lu}\\p{N}",
    "uppercase unicode alphanumeric characters",
    r
  );
}
function $(r, c, n) {
  const { onError: e, ...i } = n || {};
  try {
    return c.validateSync(r, i);
  } catch (u) {
    if (u instanceof l) {
      if (e) return e(u);
    } else throw u;
  }
}
export {
  m as asciiAlphaString,
  I as asciiAlphanumericString,
  g as asciiNumericString,
  a as buildCharSet,
  t as buildUnicodeCharSet,
  S as lowercaseAsciiAlphaString,
  C as lowercaseAsciiAlphanumericString,
  Z as lowercaseUnicodeAlphaString,
  y as lowercaseUnicodeAlphanumericString,
  h as matchesCharSet,
  f as numericId,
  $ as tryValidateSync,
  z as unicodeAlphaString,
  b as unicodeAlphanumericString,
  N as unicodeNumericString,
  d as uppercaseAsciiAlphaString,
  w as uppercaseAsciiAlphanumericString,
  L as uppercaseUnicodeAlphaString,
  U as uppercaseUnicodeAlphanumericString
};
//# sourceMappingURL=schema.es.js.map
