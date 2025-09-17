import { t, b as s } from "../../api-BvUiTeR7.js";
import { u as o } from "../../urls-5m9PgoEX.js";
import { a as q, b as y } from "../../session-D312kYKk.js";
const a = "AuthFactor";
function c(r) {
  return {
    listAuthFactors: r.query({
      query: (e) => ({
        url: s(o.authFactor.list, { search: e }),
        method: "GET"
      }),
      providesTags: t(a, { includeListTag: !0 })
    })
  };
}
const u = "Class";
function T(r) {
  return {
    retrieveClass: r.query({
      query: (e) => ({
        url: s(o.class.detail, { url: { id: e } }),
        method: "GET"
      }),
      providesTags: t(u)
    }),
    listClasses: r.query({
      query: (e) => ({
        url: s(o.class.list, { search: e }),
        method: "GET"
      }),
      providesTags: t(u, { includeListTag: !0 })
    })
  };
}
const l = "School";
function g(r) {
  return {
    retrieveSchool: r.query({
      query: (e) => ({
        url: s(o.school.detail, { url: { id: e } }),
        method: "GET"
      }),
      providesTags: t(l)
    })
  };
}
const i = "User";
function p(r) {
  return {
    retrieveUser: r.query({
      query: (e) => ({
        url: s(o.user.detail, { url: { id: e } }),
        method: "GET"
      }),
      providesTags: t(i)
    }),
    listUsers: r.query({
      query: (e) => ({
        url: s(o.user.list, { search: e }),
        method: "GET"
      }),
      providesTags: t(i, { includeListTag: !0 })
    })
  };
}
export {
  a as AUTH_FACTOR_TAG,
  u as CLASS_TAG,
  l as SCHOOL_TAG,
  i as USER_TAG,
  q as buildLoginEndpoint,
  y as buildLogoutEndpoint,
  c as getReadAuthFactorEndpoints,
  T as getReadClassEndpoints,
  g as getReadSchoolEndpoints,
  p as getReadUserEndpoints
};
//# sourceMappingURL=index.es.js.map
