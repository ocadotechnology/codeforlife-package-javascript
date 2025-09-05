import { fetchBaseQuery as f, createApi as m } from "@reduxjs/toolkit/query/react";
import { b as u } from "../general-DsmN0W6Q.js";
import { b as d } from "../session-Crq887C4.js";
import { g as s } from "../auth-DpHNJqSB.js";
import { i as l } from "../urls-Bl1eUttT.js";
import { u as C } from "../urls-Bl1eUttT.js";
import { s as G } from "../schemas-Dhvt1lNE.js";
const g = [
  // These are the tags for the common models used throughout our system.
  // https://github.com/ocadotechnology/codeforlife-package-python/tree/main/codeforlife/user/models
  // NOTE: Don't use the "Teacher" and "Student" tags. Use "User" instead.
  "User",
  "School",
  "Class",
  "AuthFactor"
];
function A({
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
    tagTypes: [...g, ...c],
    endpoints: () => ({})
  });
  return n.injectEndpoints({
    endpoints: (t) => ({
      logout: d(n, t)
    })
  });
}
export {
  A as createApi,
  G as schemas,
  g as tagTypes,
  C as urls
};
//# sourceMappingURL=index.es.js.map
