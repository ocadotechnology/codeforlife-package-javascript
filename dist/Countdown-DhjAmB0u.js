import { j as m } from "./jsx-runtime-lzYHhGH3.js";
import { useState as u } from "react";
import { Typography as a } from "@mui/material";
import "./auth-Bb8WkZGN.js";
import { u as f } from "./general-D7Hqi3gj.js";
import "react-router";
import "yup";
import "@mui/icons-material";
import "./palette-CYwuLBW7.js";
const w = ({
  seconds: t,
  start: i = !0,
  onEnd: n,
  ...p
}) => {
  t = Math.floor(t);
  const r = f(t)[0], [e, s] = u(!i);
  r === 0 && !e && (s(!0), n()), t = Math.floor(r % 60);
  const o = Math.floor(r / 60);
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: r > 0 && /* @__PURE__ */ m.jsxs(a, { ...p, children: [
    o > 0 && `${o} ${o > 1 ? "mins" : "min"} `,
    t > 0 && `${t} ${t > 1 ? "secs" : "sec"}`
  ] }) });
};
export {
  w as C
};
//# sourceMappingURL=Countdown-DhjAmB0u.js.map
