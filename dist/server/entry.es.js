import { jsx as t } from "react/jsx-runtime";
import { BrowserRouter as T, StaticRouter as g } from "react-router";
import { StrictMode as u } from "react";
import k from "@emotion/cache";
import h from "./DefaultRoutes.es.js";
import "@mui/material";
import "@emotion/react";
import "react-redux";
/* empty css              */
const E = "codeforlife", R = {
  name: E
};
function f({
  key: o = "css",
  // ensures all styles are generated with this prefix
  prepend: e = !0,
  // loads MUI-styles first so we can override them easily
  ...r
} = {}) {
  return k({ key: o, prepend: e, ...r });
}
const p = !0;
async function j({
  App: o,
  routes: e,
  catchAllRoute: r = p,
  createEmotionCacheOptions: c,
  ...i
}) {
  const { default: n } = await import("@emotion/server/create-instance"), { renderToString: a } = await import("react-dom/server"), { default: s } = await import("node:fs/promises"), C = await s.readFile(
    `./node_modules/${R.name}/dist/style.css`,
    "utf-8"
  );
  function y(S) {
    const l = f(c), m = n(l), d = a(
      /* @__PURE__ */ t(u, { children: /* @__PURE__ */ t(o, { emotionCache: l, ...i, children: /* @__PURE__ */ t(g, { location: S, children: /* @__PURE__ */ t(h, { catchAll: r, children: e }) }) }) })
    ), w = m.extractCriticalToChunks(d), A = m.constructStyleTagsFromChunks(w);
    return {
      html: d,
      head: `${A}<style data-cfl>${C}</style>`
    };
  }
  return { render: y };
}
async function H({
  App: o,
  routes: e,
  catchAllRoute: r = p,
  createEmotionCacheOptions: c,
  ...i
}) {
  const n = await import("react-dom/client"), { hydrateRoot: a } = n.default || n, s = f(c);
  a(
    document.getElementById("root"),
    /* @__PURE__ */ t(u, { children: /* @__PURE__ */ t(o, { emotionCache: s, ...i, children: /* @__PURE__ */ t(T, { children: /* @__PURE__ */ t(h, { catchAll: r, children: e }) }) }) })
  );
}
export {
  H as client,
  j as server
};
//# sourceMappingURL=entry.es.js.map
