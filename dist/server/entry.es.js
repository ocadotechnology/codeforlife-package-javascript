import { j as t } from "../jsx-runtime-lzYHhGH3.js";
import { BrowserRouter as C, Routes as u, StaticRouter as y } from "react-router";
import { StrictMode as d } from "react";
import S from "@emotion/cache";
import "@mui/material";
import "@emotion/react";
import "react-redux";
/* empty css              */
function p({
  key: o = "css",
  // ensures all styles are generated with this prefix
  prepend: e = !0,
  // loads MUI-styles first so we can override them easily
  ...r
} = {}) {
  return S({ key: o, prepend: e, ...r });
}
async function $({
  App: o,
  routes: e,
  createEmotionCacheOptions: r = {},
  ...n
}) {
  const { default: c } = await import("../emotion-server-create-instance.browser.esm-CgeoyX9a.js"), { renderToString: i } = await import("../server.browser-gAvZ6xhz.js").then((a) => a.s), { default: s } = await import("../style-C3515J9T.js");
  function f(a) {
    const m = p(r), l = c(m), h = i(
      /* @__PURE__ */ t.jsx(d, { children: /* @__PURE__ */ t.jsx(o, { emotionCache: m, ...n, children: /* @__PURE__ */ t.jsx(y, { location: a, children: /* @__PURE__ */ t.jsx(u, { children: e }) }) }) })
    ), x = l.extractCriticalToChunks(h), j = l.constructStyleTagsFromChunks(x);
    return {
      html: h,
      head: `${j}<style data-cfl>${s}</style>`
    };
  }
  return { render: f };
}
async function F({
  App: o,
  routes: e,
  createEmotionCacheOptions: r = {},
  ...n
}) {
  const { hydrateRoot: c } = await import("../client-CUE3jVb4.js").then((s) => s.c), i = p(r);
  c(
    document.getElementById("root"),
    /* @__PURE__ */ t.jsx(d, { children: /* @__PURE__ */ t.jsx(o, { emotionCache: i, ...n, children: /* @__PURE__ */ t.jsx(C, { children: /* @__PURE__ */ t.jsx(u, { children: e }) }) }) })
  );
}
export {
  F as client,
  $ as server
};
//# sourceMappingURL=entry.es.js.map
