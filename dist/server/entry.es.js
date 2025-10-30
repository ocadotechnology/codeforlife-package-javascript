import { jsx as t } from "react/jsx-runtime";
import { BrowserRouter as w, Routes as l, StaticRouter as g } from "react-router";
import { StrictMode as d } from "react";
import k from "@emotion/cache";
import "@mui/material";
import "@emotion/react";
import "react-redux";
/* empty css              */
const R = "codeforlife", v = {
  name: R
};
function u({
  key: o = "css",
  // ensures all styles are generated with this prefix
  prepend: e = !0,
  // loads MUI-styles first so we can override them easily
  ...r
} = {}) {
  return k({ key: o, prepend: e, ...r });
}
async function J({
  App: o,
  routes: e,
  createEmotionCacheOptions: r = {},
  ...n
}) {
  const { default: c } = await import("@emotion/server/create-instance"), { renderToString: i } = await import("react-dom/server"), { default: h } = await import("node:fs/promises"), f = await h.readFile(
    `./node_modules/${v.name}/dist/style.css`,
    "utf-8"
  );
  function p(y) {
    const s = u(r), a = c(s), m = i(
      /* @__PURE__ */ t(d, { children: /* @__PURE__ */ t(o, { emotionCache: s, ...n, children: /* @__PURE__ */ t(g, { location: y, children: /* @__PURE__ */ t(l, { children: e }) }) }) })
    ), C = a.extractCriticalToChunks(m), S = a.constructStyleTagsFromChunks(C);
    return {
      html: m,
      head: `${S}<style data-cfl>${f}</style>`
    };
  }
  return { render: p };
}
async function M({
  App: o,
  routes: e,
  createEmotionCacheOptions: r = {},
  ...n
}) {
  const { hydrateRoot: c } = await import("react-dom/client"), i = u(r);
  c(
    document.getElementById("root"),
    /* @__PURE__ */ t(d, { children: /* @__PURE__ */ t(o, { emotionCache: i, ...n, children: /* @__PURE__ */ t(w, { children: /* @__PURE__ */ t(l, { children: e }) }) }) })
  );
}
export {
  M as client,
  J as server
};
//# sourceMappingURL=entry.es.js.map
