import { jsx as n } from "react/jsx-runtime";
import { Box as p } from "@mui/material";
import "react";
import { openInNewTab as s } from "./utils/general.es.js";
const f = ({ href: i, hrefInNewTab: r = !1, ...e }) => {
  let {
    onClick: t,
    style: o = {},
    ...m
    // eslint-disable-line prefer-const
  } = e;
  return o.width === void 0 && (o.width = "100%"), i !== void 0 && (o = { ...o, cursor: "pointer" }, r ? t = () => {
    s(i);
  } : t = () => {
    window.location.replace(i);
  }), /* @__PURE__ */ n(p, { component: "img", onClick: t, style: o, ...m });
};
export {
  f as I
};
//# sourceMappingURL=Image-mkNhOo5p.js.map
