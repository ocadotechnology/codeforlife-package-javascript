import { configureStore as s } from "@reduxjs/toolkit";
import { s as i } from "../rtk-query.modern-DGiM5X48.js";
function a({
  reducer: t,
  middlewares: e = [],
  preloadedState: o = {}
}) {
  const r = s({
    reducer: t,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (n) => n().concat(e),
    preloadedState: o
  });
  return i(r.dispatch), r;
}
export {
  a as makeStore
};
//# sourceMappingURL=store.es.js.map
