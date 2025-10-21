import { j as a } from "../jsx-runtime-lzYHhGH3.js";
import "@testing-library/dom";
import { render as o } from "@testing-library/react";
import "../client-BK9NlSVR.js";
import p from "@testing-library/user-event";
import { Provider as f } from "react-redux";
import { makeStore as c } from "./store.es.js";
function w(r, e = {}) {
  return {
    user: p.setup(),
    ...o(r, e)
  };
}
function E(r, e, i = {}) {
  const {
    middlewares: m,
    preloadedState: n,
    // Automatically create a store instance if no store was passed in
    store: t = c({ reducer: e, middlewares: m, preloadedState: n }),
    ...s
  } = i, u = ({ children: d }) => /* @__PURE__ */ a.jsx(f, { store: t, children: d });
  return {
    store: t,
    user: p.setup(),
    ...o(r, { wrapper: u, ...s })
  };
}
export {
  E as renderWithStore,
  w as renderWithUser
};
//# sourceMappingURL=test.es.js.map
