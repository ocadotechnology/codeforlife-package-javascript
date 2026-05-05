let l = {}, o = !1;
function r(t) {
  return l = t, o = !0, {
    SERVICE_NAME: S(),
    SERVICE_TITLE: _(),
    SERVICE_API_URL: n(),
    CSRF_COOKIE_NAME: s(),
    SESSION_COOKIE_NAME: u(),
    SESSION_METADATA_COOKIE_NAME: i()
  };
}
function e(t, E = {}) {
  if (!o)
    throw new Error(
      "Settings have not been set up. Please call setup(import.meta.env) before calling getSetting."
    );
  const a = l[`VITE_${t}`];
  return a === void 0 ? E?.defaultValue : "cast" in E ? E.cast(a) : a;
}
const S = () => e("SERVICE_NAME", { defaultValue: "REPLACE_ME" }), _ = () => e("SERVICE_TITLE", {
  defaultValue: `Code for Life | ${S()}`
}), n = () => e("SERVICE_API_URL", { defaultValue: "http://localhost:8000" }), s = () => e("CSRF_COOKIE_NAME", {
  defaultValue: `${S()}_csrftoken`
}), u = () => e("SESSION_COOKIE_NAME", { defaultValue: "session_key" }), i = () => e("SESSION_METADATA_COOKIE_NAME", {
  defaultValue: "session_metadata"
});
export {
  s as getCsrfCookieName,
  n as getServiceApiUrl,
  S as getServiceName,
  _ as getServiceTitle,
  u as getSessionCookieName,
  i as getSessionMetadataCookieName,
  e as getSetting,
  r as setup
};
//# sourceMappingURL=settings.es.js.map
