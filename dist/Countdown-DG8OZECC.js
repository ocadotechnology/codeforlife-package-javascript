import { j as m } from "./jsx-runtime-Dpn_P65e.js";
import { useState as u } from "react";
import { Typography as a } from "@mui/material";
import "./auth-zGaeJRR9.js";
import { u as f } from "./general-D7Hqi3gj.js";
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
  const r = f(t)[0], [e, s] = u(!i);
  r === 0 && !e && (s(!0), n()), t = Math.floor(r % 60);
  const o = Math.floor(r / 60);
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: r > 0 && /* @__PURE__ */ m.jsxs(a, { ...p, children: [
    o > 0 && `${o} ${o > 1 ? "mins" : "min"} `,
    t > 0 && `${t} ${t > 1 ? "secs" : "sec"}`
  ] }) });
};
export {
  g as C
};
//# sourceMappingURL=Countdown-DG8OZECC.js.map
