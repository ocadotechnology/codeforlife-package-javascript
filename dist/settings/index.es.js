const s = {}, E = s, S = E.VITE_SERVICE_NAME ?? "REPLACE_ME", O = E.VITE_SERVICE_API_URL ?? "http://localhost:8000", c = `${S}_csrftoken`, A = E.VITE_SESSION_COOKIE_NAME ?? "session_key", I = E.VITE_SESSION_METADATA_COOKIE_NAME ?? "session_metadata", n = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, _ = n, R = _.MODE, D = _.BASE_URL, M = _.PROD, a = _.DEV, V = _.SSR, e = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, i = new Proxy(e, {
  get: (t, o) => t[`VITE_${o}`]
});
export {
  D as BASE_URL,
  c as CSRF_COOKIE_NAME,
  a as DEV,
  R as MODE,
  M as PROD,
  O as SERVICE_API_URL,
  S as SERVICE_NAME,
  A as SESSION_COOKIE_NAME,
  I as SESSION_METADATA_COOKIE_NAME,
  V as SSR,
  i as default
};
//# sourceMappingURL=index.es.js.map
