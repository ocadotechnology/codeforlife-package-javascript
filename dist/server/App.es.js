import { j as r } from "../jsx-runtime-lzYHhGH3.js";
import { ThemeProvider as i, CssBaseline as t } from "@mui/material";
import { CacheProvider as p } from "@emotion/react";
import "react";
import { Provider as a } from "react-redux";
/* empty css              */
const u = ({
  children: o,
  emotionCache: e,
  theme: s,
  store: m,
  // @ts-expect-error TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: d = 3600,
  // @ts-expect-error TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: x = 3600
}) => (
  // https://mui.com/material-ui/guides/server-rendering/
  /* @__PURE__ */ r.jsx(p, { value: e, children: /* @__PURE__ */ r.jsxs(i, { theme: s, children: [
    /* @__PURE__ */ r.jsx(t, {}),
    /* @__PURE__ */ r.jsx(a, { store: m, children: o })
  ] }) })
);
export {
  u as default
};
//# sourceMappingURL=App.es.js.map
