import { j as m } from "./jsx-runtime-Dpn_P65e.js";
import { useState as s } from "react";
import { Typography as u } from "@mui/material";
import "./auth-Ds-898Jp.js";
import { a as f } from "./general-CtTJPCJn.js";
import "react-router-dom";
import "yup";
import "@mui/icons-material";
const g = ({
  seconds: t,
  start: i = !0,
  onEnd: n,
  ...p
}) => {
  t = Math.floor(t);
  const r = f(t)[0], [e, a] = s(!i);
  r === 0 && !e && (a(!0), n()), t = Math.floor(r % 60);
  const o = Math.floor(r / 60);
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: r > 0 && /* @__PURE__ */ m.jsxs(u, { ...p, children: [
    o > 0 && `${o} ${o > 1 ? "mins" : "min"} `,
    t > 0 && `${t} ${t > 1 ? "secs" : "sec"}`
  ] }) });
};
export {
  g as C
};
//# sourceMappingURL=Countdown-CO-PK_Fi.js.map
