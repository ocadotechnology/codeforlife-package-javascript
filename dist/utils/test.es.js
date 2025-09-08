import { j as d } from "../jsx-runtime-Dpn_P65e.js";
import "@testing-library/dom";
import { render as a } from "@testing-library/react";
import c from "react-dom";
import p from "@testing-library/user-event";
import { Provider as E } from "react-redux";
import { makeStore as R } from "./store.es.js";
var e = {}, s;
function y() {
  if (s) return e;
  s = 1;
  var r = c;
  if (process.env.NODE_ENV === "production")
    e.createRoot = r.createRoot, e.hydrateRoot = r.hydrateRoot;
  else {
    var t = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    e.createRoot = function(o, n) {
      t.usingClientEntryPoint = !0;
      try {
        return r.createRoot(o, n);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    }, e.hydrateRoot = function(o, n, i) {
      t.usingClientEntryPoint = !0;
      try {
        return r.hydrateRoot(o, n, i);
      } finally {
        t.usingClientEntryPoint = !1;
      }
    };
  }
  return e;
}
y();
function P(r, t = {}) {
  return {
    user: p.setup(),
    ...a(r, t)
  };
}
function g(r, t, o = {}) {
  const {
    middlewares: n,
    preloadedState: i,
    // Automatically create a store instance if no store was passed in
    store: u = R({ reducer: t, middlewares: n, preloadedState: i }),
    ...f
  } = o, m = ({ children: l }) => /* @__PURE__ */ d.jsx(E, { store: u, children: l });
  return {
    store: u,
    user: p.setup(),
    ...a(r, { wrapper: m, ...f })
  };
}
export {
  g as renderWithStore,
  P as renderWithUser
};
//# sourceMappingURL=test.es.js.map
