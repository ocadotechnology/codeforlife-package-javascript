import { configureStore as i } from "@reduxjs/toolkit";
import { setupListeners as c } from "@reduxjs/toolkit/query";
function p({
  reducer: t,
  middlewares: e = [],
  preloadedState: o = {}
}) {
  const r = i({
    reducer: t,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (n) => n().concat(e),
    preloadedState: o
  });
  return c(r.dispatch), r;
}
export {
  p as makeStore
};
//# sourceMappingURL=store.es.js.map
