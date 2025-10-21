import { j as n } from "./jsx-runtime-lzYHhGH3.js";
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
  }), /* @__PURE__ */ n.jsx(p, { component: "img", onClick: t, style: o, ...m });
};
export {
  f as I
};
//# sourceMappingURL=Image-DTOu0h-V.js.map
