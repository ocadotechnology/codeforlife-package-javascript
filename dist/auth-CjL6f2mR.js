import o from "js-cookie";
import { S as a, b as c, C as s, g as i } from "./urls-Cs55cfVl.js";
function S() {
  o.remove(a), o.remove(c);
}
function g() {
  return o.get(s);
}
function E(t, e) {
  return `oauth2.${t}.${e}`;
}
const _ = ["S256"], u = [
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
async function O(t) {
  const e = i(t), r = new TextEncoder().encode(e), n = await window.crypto.subtle.digest("SHA-256", r);
  return {
    verifier: e,
    challenge: btoa(String.fromCharCode(...new Uint8Array(n))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""),
    method: "S256"
  };
}
const A = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OAUTH2_CODE_CHALLENGE_LENGTHS: u,
  OAUTH2_CODE_CHALLENGE_METHODS: _,
  generateOAuth2CodeChallenge: O,
  getCsrfCookie: g,
  logout: S,
  makeOAuth2StorageKey: E
}, Symbol.toStringTag, { value: "Module" }));
export {
  O as a,
  A as b,
  g,
  S as l,
  E as m
};
//# sourceMappingURL=auth-CjL6f2mR.js.map
