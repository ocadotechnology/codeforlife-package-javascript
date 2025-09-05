import { j as m } from "./jsx-runtime-XvoU0p7t.js";
import { Box as n } from "@mui/material";
import "react";
import { o as p } from "./general-DO-KrNo5.js";
const f = ({ href: i, hrefInNewTab: r = !1, ...e }) => {
  let {
    onClick: t,
    style: o = {},
    ...s
    // eslint-disable-line prefer-const
  } = e;
  return o.width === void 0 && (o.width = "100%"), i !== void 0 && (o = { ...o, cursor: "pointer" }, r ? t = () => {
    p(i);
  } : t = () => {
    window.location.replace(i);
  }), /* @__PURE__ */ m.jsx(n, { component: "img", onClick: t, style: o, ...s });
};
export {
  f as I
};
//# sourceMappingURL=Image-CnJ1LCCQ.js.map
