import { jsx as f } from "react/jsx-runtime";
import "@testing-library/dom";
import { render as o } from "@testing-library/react";
import "react-dom/client";
import p from "@testing-library/user-event";
import { Provider as a } from "react-redux";
import { makeStore as c } from "./store.es.js";
function j(r, e = {}) {
  return {
    user: p.setup(),
    ...o(r, e)
  };
}
function k(r, e, i = {}) {
  const {
    middlewares: m,
    preloadedState: n,
    // Automatically create a store instance if no store was passed in
    store: t = c({ reducer: e, middlewares: m, preloadedState: n }),
    ...s
  } = i, d = ({ children: u }) => /* @__PURE__ */ f(a, { store: t, children: u });
  return {
    store: t,
    user: p.setup(),
    ...o(r, { wrapper: d, ...s })
  };
}
export {
  k as renderWithStore,
  j as renderWithUser
};
//# sourceMappingURL=test.es.js.map
