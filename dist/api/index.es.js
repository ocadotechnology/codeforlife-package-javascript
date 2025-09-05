import { fetchBaseQuery as f, createApi as m } from "@reduxjs/toolkit/query/react";
import { SERVICE_API_URL as u } from "../settings/index.es.js";
import { b as d } from "../session-COyN01K0.js";
import { getCsrfCookie as s } from "../utils/auth.es.js";
import { i as l } from "../api-Cbyt3rw0.js";
import { s as C } from "../schemas-DlOtf2vf.js";
import { u as G } from "../urls-DtHr1d3H.js";
const y = [
  // These are the tags for the common models used throughout our system.
  // https://github.com/ocadotechnology/codeforlife-package-python/tree/main/codeforlife/user/models
  // NOTE: Don't use the "Teacher" and "Student" tags. Use "User" instead.
  "User",
  "School",
  "Class",
  "AuthFactor"
];
function b({
  tagTypes: c = []
} = {}) {
  const i = f({
    baseUrl: `${u}/`,
    credentials: "include",
    prepareHeaders: (t, o) => {
      const { type: r, arg: e } = o, p = typeof e == "string" ? "GET" : e.method || "GET";
      if (r === "mutation" || !l(p)) {
        const a = s();
        a && t.set("x-csrftoken", a);
      }
      return t;
    }
  }), n = m({
    // https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#implementing-a-custom-basequery
    baseQuery: async (t, o, r) => {
      if (o.type === "mutation" && s() === void 0) {
        const { error: e } = await i(
          { url: "/csrf/cookie/", method: "GET" },
          o,
          {}
        );
        e !== void 0 && console.error(e), s();
      }
      return await i(t, o, r);
    },
    tagTypes: [...y, ...c],
    endpoints: () => ({})
  });
  return n.injectEndpoints({
    endpoints: (t) => ({
      logout: d(n, t)
    })
  });
}
export {
  b as createApi,
  C as schemas,
  y as tagTypes,
  G as urls
};
//# sourceMappingURL=index.es.js.map
