import { jsx as o } from "react/jsx-runtime";
import { BrowserRouter as n } from "react-router";
import { StrictMode as l } from "react";
import { hydrateRoot as a } from "react-dom/client";
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
  a(
    document.getElementById("root"),
    /* @__PURE__ */ o(l, { children: /* @__PURE__ */ o(t, { emotionCache: i, ...c, children: /* @__PURE__ */ o(n, { children: /* @__PURE__ */ o(h, { catchAll: e, children: r }) }) }) })
  );
}
export {
  E as client
};
//# sourceMappingURL=client.es.js.map
