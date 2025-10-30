const s = {}, _ = s, t = _.VITE_SERVICE_NAME ?? "REPLACE_ME", I = _.VITE_SERVICE_TITLE ?? `Code for Life | ${t}`, O = _.VITE_SERVICE_API_URL ?? "http://localhost:8000", R = `${t}_csrftoken`, c = _.VITE_SESSION_COOKIE_NAME ?? "session_key", A = _.VITE_SESSION_METADATA_COOKIE_NAME ?? "session_metadata", e = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, E = e, V = E.MODE, C = E.BASE_URL, D = E.PROD, M = E.DEV, T = E.SSR, n = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 }, i = new Proxy(n, {
  get: (o, S) => o[`VITE_${S}`]
});
export {
  C as BASE_URL,
  R as CSRF_COOKIE_NAME,
  M as DEV,
  V as MODE,
  D as PROD,
  O as SERVICE_API_URL,
  t as SERVICE_NAME,
  I as SERVICE_TITLE,
  c as SESSION_COOKIE_NAME,
  A as SESSION_METADATA_COOKIE_NAME,
  T as SSR,
  i as vite
};
//# sourceMappingURL=index.es.js.map
