import { jsx as r, jsxs as t } from "react/jsx-runtime";
import { ThemeProvider as s, CssBaseline as d } from "@mui/material";
import { CacheProvider as p } from "@emotion/react";
import "react";
import { Provider as a } from "react-redux";
/* empty css              */
const P = ({
  children: o,
  emotionCache: e,
  theme: m,
  store: i,
  // @ts-expect-error TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: l = 3600,
  // @ts-expect-error TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: n = 3600
}) => (
  // https://mui.com/material-ui/guides/server-rendering/
  /* @__PURE__ */ r(p, { value: e, children: /* @__PURE__ */ t(s, { theme: m, children: [
    /* @__PURE__ */ r(d, {}),
    /* @__PURE__ */ r(a, { store: i, children: o })
  ] }) })
);
export {
  P as default
};
//# sourceMappingURL=App.es.js.map
