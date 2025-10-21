import { j as n } from "./jsx-runtime-lzYHhGH3.js";
import { Link as i, IconButton as m, ListItem as a, Tab as c } from "@mui/material";
import { useEffect as p } from "react";
import { Link as o } from "react-router";
import "@mui/icons-material";
import "./palette-CYwuLBW7.js";
import { e as u } from "./auth-Bb8WkZGN.js";
const I = (t) => /* @__PURE__ */ n.jsx(i, { component: o, ...t }), v = (t) => /* @__PURE__ */ n.jsx(m, { ...t, component: o }), N = (t) => /* @__PURE__ */ n.jsx(a, { ...t, component: o }), B = (t) => /* @__PURE__ */ n.jsx(c, { ...t, component: o }), E = ({
  delta: t,
  to: s,
  ...e
}) => {
  const r = u();
  return p(() => {
    typeof t == "number" ? r(t) : r(s, e);
  }, [r, t, s, e]), /* @__PURE__ */ n.jsx(n.Fragment, {});
};
export {
  I as L,
  E as N,
  v as a,
  N as b,
  B as c
};
//# sourceMappingURL=Navigate-ClPcw87e.js.map
