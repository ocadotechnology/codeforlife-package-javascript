import { jsx as t } from "react/jsx-runtime";
import { BrowserRouter as S, Routes as l, StaticRouter as w } from "react-router";
import { StrictMode as d } from "react";
import R from "@emotion/cache";
import "@mui/material";
import "@emotion/react";
import "react-redux";
/* empty css              */
function h({
  key: o = "css",
  // ensures all styles are generated with this prefix
  prepend: e = !0,
  // loads MUI-styles first so we can override them easily
  ...r
} = {}) {
  return R({ key: o, prepend: e, ...r });
}
async function j({
  App: o,
  routes: e,
  createEmotionCacheOptions: r = {},
  ...n
}) {
  const { default: c } = await import("@emotion/server/create-instance"), { renderToString: i } = await import("react-dom/server"), { default: u } = await import("../style-C3515J9T.js");
  function p(f) {
    const a = h(r), m = c(a), s = i(
      /* @__PURE__ */ t(d, { children: /* @__PURE__ */ t(o, { emotionCache: a, ...n, children: /* @__PURE__ */ t(w, { location: f, children: /* @__PURE__ */ t(l, { children: e }) }) }) })
    ), C = m.extractCriticalToChunks(s), y = m.constructStyleTagsFromChunks(C);
    return {
      html: s,
      head: `${y}<style data-cfl>${u}</style>`
    };
  }
  return { render: p };
}
async function F({
  App: o,
  routes: e,
  createEmotionCacheOptions: r = {},
  ...n
}) {
  const { hydrateRoot: c } = await import("react-dom/client"), i = h(r);
  c(
    document.getElementById("root"),
    /* @__PURE__ */ t(d, { children: /* @__PURE__ */ t(o, { emotionCache: i, ...n, children: /* @__PURE__ */ t(S, { children: /* @__PURE__ */ t(l, { children: e }) }) }) })
  );
}
export {
  F as client,
  j as server
};
//# sourceMappingURL=entry.es.js.map
