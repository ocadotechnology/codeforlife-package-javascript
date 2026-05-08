import { jsx as t } from "react/jsx-runtime";
import { StaticRouter as h } from "react-router";
import { StrictMode as p } from "react";
import C from "@emotion/server/create-instance";
import S from "node:fs/promises";
import { renderToString as y } from "react-dom/server";
import { D as T, c as k } from "../../common-BQDBPfA-.js";
import A from "../DefaultRoutes.es.js";
const g = "codeforlife", v = {
  name: g
};
async function j({
  App: n,
  routes: c,
  catchAllRoute: i = T,
  createEmotionCacheOptions: s,
  ...m
}) {
  const a = await S.readFile(
    `./node_modules/${v.name}/dist/style.css`,
    "utf-8"
  );
  function l(f) {
    const o = k(s), e = C(o), r = y(
      /* @__PURE__ */ t(p, { children: /* @__PURE__ */ t(n, { emotionCache: o, ...m, children: /* @__PURE__ */ t(h, { location: f, children: /* @__PURE__ */ t(A, { catchAll: i, children: c }) }) }) })
    ), d = e.extractCriticalToChunks(r), u = e.constructStyleTagsFromChunks(d);
    return {
      html: r,
      head: `${u}<style data-cfl>${a}</style>`
    };
  }
  return { render: l };
}
export {
  j as server
};
//# sourceMappingURL=server.es.js.map
