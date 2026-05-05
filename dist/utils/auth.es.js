import t from "js-cookie";
import { getCsrfCookieName as a, getSessionCookieName as i, getSessionMetadataCookieName as c } from "./settings.es.js";
import { generateSecureRandomString as g } from "./general.es.js";
function u() {
  t.remove(i()), t.remove(c());
}
function d() {
  return t.get(a());
}
function f(o, e) {
  return `oauth2.${o}.${e}`;
}
const S = ["S256"], l = [
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
  123,
  124,
  125,
  126,
  127,
  128
];
async function E(o) {
  const e = g(o), r = new TextEncoder().encode(e), n = await window.crypto.subtle.digest("SHA-256", r);
  return {
    verifier: e,
    challenge: btoa(String.fromCharCode(...new Uint8Array(n))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),
    method: "S256"
  };
}
export {
  l as OAUTH2_CODE_CHALLENGE_LENGTHS,
  S as OAUTH2_CODE_CHALLENGE_METHODS,
  E as generateOAuth2CodeChallenge,
  d as getCsrfCookie,
  u as logout,
  f as makeOAuth2StorageKey
};
//# sourceMappingURL=auth.es.js.map
