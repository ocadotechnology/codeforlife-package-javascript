import { j as r } from "../jsx-runtime-lzYHhGH3.js";
import { ThemeProvider as i, CssBaseline as t } from "@mui/material";
import { CacheProvider as a } from "@emotion/react";
import "react";
import { Provider as d } from "react-redux";
const h = ({
  children: e,
  emotionCache: o,
  theme: s,
  store: m,
  // @ts-expect-error TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: p = 3600,
  // @ts-expect-error TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: x = 3600
}) => (
  // https://mui.com/material-ui/guides/server-rendering/
  /* @__PURE__ */ r.jsx(a, { value: o, children: /* @__PURE__ */ r.jsxs(i, { theme: s, children: [
    /* @__PURE__ */ r.jsx(t, {}),
    /* @__PURE__ */ r.jsx(d, { store: m, children: e })
  ] }) })
);
export {
  h as default
};
//# sourceMappingURL=App.es.js.map
