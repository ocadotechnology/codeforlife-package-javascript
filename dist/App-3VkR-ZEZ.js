import { j as r } from "./jsx-runtime-lzYHhGH3.js";
import { ThemeProvider as i, CssBaseline as t } from "@mui/material";
import { CacheProvider as p } from "@emotion/react";
import "react";
import { Provider as x } from "react-redux";
const h = ({
  children: o,
  emotionCache: e,
  theme: s,
  store: m,
  // @ts-expect-error TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxIdleSeconds: a = 3600,
  // @ts-expect-error TODO
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  maxTotalSeconds: d = 3600
}) => (
  // https://mui.com/material-ui/guides/server-rendering/
  /* @__PURE__ */ r.jsx(p, { value: e, children: /* @__PURE__ */ r.jsxs(i, { theme: s, children: [
    /* @__PURE__ */ r.jsx(t, {}),
    /* @__PURE__ */ r.jsx(x, { store: m, children: o })
  ] }) })
);
export {
  h as A
};
//# sourceMappingURL=App-3VkR-ZEZ.js.map
