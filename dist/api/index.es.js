import { fetchBaseQuery as f, createApi as m } from "@reduxjs/toolkit/query/react";
import { c as u, i as d } from "../urls-Cs55cfVl.js";
import { u as x } from "../urls-Cs55cfVl.js";
import { b as l } from "../session-Bsl02xbZ.js";
import { g as s } from "../auth-CjL6f2mR.js";
import { s as v } from "../schemas-BCtHWQhT.js";
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
      if (r === "mutation" || !d(p)) {
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
      logout: l(n, t)
    })
  });
}
export {
  A as createApi,
  v as schemas,
  g as tagTypes,
  x as urls
};
//# sourceMappingURL=index.es.js.map
