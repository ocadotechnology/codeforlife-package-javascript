import { j as a } from "./jsx-runtime-Dpn_P65e.js";
import { useState as m, useEffect as f } from "react";
import { Typography as E } from "@mui/material";
import "./auth-DuTUGD6R.js";
import "react-router-dom";
import "yup";
import "@mui/icons-material";
function w({
  props: t,
  attrs: r,
  eventTypes: i
}) {
  const [s, o] = m();
  return f(() => {
    if (document.querySelector(`script[src="${t.src}"]`))
      throw Error("already exists");
    const e = document.createElement("script");
    Object.entries(t).forEach(([n, u]) => {
      e[n] = u;
    }), r !== void 0 && Object.entries(r).forEach(([n, u]) => {
      e.setAttribute(n, u);
    });
    function c(n) {
      o(n.type);
    }
    return i?.forEach((n) => {
      e.addEventListener(n, c);
    }), document.head.appendChild(e), () => {
      i?.forEach((n) => {
        e.removeEventListener(n, c);
      }), document.head.removeChild(e);
    };
  }, [i, r, t]), s;
}
function d(t, r = 1) {
  if (t <= 0) throw Error("seconds must be > 0");
  if (r <= 0) throw Error("interval must be > 0");
  const [i, s] = m(t);
  return f(() => {
    const o = setInterval(() => {
      s((e) => (e = e - r, e < 0 ? 0 : e));
    }, r * 1e3);
    return () => {
      clearInterval(o);
    };
  }, [r]), [i, s];
}
function L(t, r, i, s = {}) {
  const { options: o, deps: e = [] } = s;
  f(
    () => (t.addEventListener(r, i, o), () => {
      t.removeEventListener(r, i, o);
    }),
    // TODO: simplify this hook.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const C = ({
  seconds: t,
  start: r = !0,
  onEnd: i,
  ...s
}) => {
  t = Math.floor(t);
  const o = d(t)[0], [e, c] = m(!r);
  o === 0 && !e && (c(!0), i()), t = Math.floor(o % 60);
  const n = Math.floor(o / 60);
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: o > 0 && /* @__PURE__ */ a.jsxs(E, { ...s, children: [
    n > 0 && `${n} ${n > 1 ? "mins" : "min"} `,
    t > 0 && `${t} ${t > 1 ? "secs" : "sec"}`
  ] }) });
};
export {
  C,
  d as a,
  L as b,
  w as u
};
//# sourceMappingURL=Countdown-CZ3lVNH0.js.map
