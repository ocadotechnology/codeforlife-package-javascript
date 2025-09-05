import o from "js-cookie";
import { CSRF_COOKIE_NAME as a, SESSION_COOKIE_NAME as i, SESSION_METADATA_COOKIE_NAME as c } from "./settings/index.es.js";
import { g } from "./general-DO-KrNo5.js";
function S() {
  o.remove(i), o.remove(c);
}
function C() {
  return o.get(a);
}
function d(t, e) {
  return `oauth2.${t}.${e}`;
}
async function f(t) {
  const e = g(t), r = new TextEncoder().encode(e), n = await window.crypto.subtle.digest("SHA-256", r);
  return {
    verifier: e,
    challenge: btoa(String.fromCharCode(...new Uint8Array(n))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),
    method: "S256"
  };
}
export {
  f as a,
  C as g,
  S as l,
  d as m
};
//# sourceMappingURL=auth-BkL9GD7F.js.map
