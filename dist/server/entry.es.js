import { jsx as t } from "react/jsx-runtime";
import { BrowserRouter as w, Routes as d, StaticRouter as g } from "react-router";
import { StrictMode as u } from "react";
import k from "@emotion/cache";
import "@mui/material";
import "@emotion/react";
import "react-redux";
/* empty css              */
const R = "codeforlife", v = {
  name: R
};
function h({
  key: o = "css",
  // ensures all styles are generated with this prefix
  prepend: e = !0,
  // loads MUI-styles first so we can override them easily
  ...r
} = {}) {
  return k({ key: o, prepend: e, ...r });
}
async function D({
  App: o,
  routes: e,
  createEmotionCacheOptions: r = {},
  ...c
}) {
  const { default: n } = await import("@emotion/server/create-instance"), { renderToString: i } = await import("react-dom/server"), { default: s } = await import("node:fs/promises"), f = await s.readFile(
    `./node_modules/${v.name}/dist/style.css`,
    "utf-8"
  );
  function p(C) {
    const a = h(r), m = n(a), l = i(
      /* @__PURE__ */ t(u, { children: /* @__PURE__ */ t(o, { emotionCache: a, ...c, children: /* @__PURE__ */ t(g, { location: C, children: /* @__PURE__ */ t(d, { children: e }) }) }) })
    ), y = m.extractCriticalToChunks(l), S = m.constructStyleTagsFromChunks(y);
    return {
      html: l,
      head: `${S}<style data-cfl>${f}</style>`
    };
  }
  return { render: p };
}
async function I({
  App: o,
  routes: e,
  createEmotionCacheOptions: r = {},
  ...c
}) {
  const n = await import("react-dom/client"), { hydrateRoot: i } = n.default || n, s = h(r);
  i(
    document.getElementById("root"),
    /* @__PURE__ */ t(u, { children: /* @__PURE__ */ t(o, { emotionCache: s, ...c, children: /* @__PURE__ */ t(w, { children: /* @__PURE__ */ t(d, { children: e }) }) }) })
  );
}
export {
  I as client,
  D as server
};
//# sourceMappingURL=entry.es.js.map
