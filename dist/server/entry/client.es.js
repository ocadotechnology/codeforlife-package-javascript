import { jsx as o } from "react/jsx-runtime";
import { BrowserRouter as n } from "react-router";
import { StrictMode as a } from "react";
import { hydrateRoot as l } from "react-dom/client";
import { c as d, D as f } from "../../common-BQDBPfA-.js";
import h from "../DefaultRoutes.es.js";
function E({
  App: t,
  routes: r,
  catchAllRoute: e = f,
  createEmotionCacheOptions: m,
  ...c
}) {
  const i = d(m);
  l(
    document.getElementById("root"),
    /* @__PURE__ */ o(a, { children: /* @__PURE__ */ o(t, { emotionCache: i, ...c, children: /* @__PURE__ */ o(n, { children: /* @__PURE__ */ o(h, { catchAll: e, children: r }) }) }) })
  );
}
export {
  E as default
};
//# sourceMappingURL=client.es.js.map
