import "@reduxjs/toolkit/query/react";
import { l, a as u } from "./urls-DGMVuEdF.js";
function d(n, r = "session/login/") {
  return n.mutation({
    query: (o) => ({ url: r, method: "POST", body: o }),
    async onQueryStarted(o, { dispatch: i, queryFulfilled: t }) {
      try {
        await t, i(u());
      } catch (e) {
        console.error("Failed to call login endpoint...", e);
      }
    }
  });
}
function y(n, r, o = "session/logout/") {
  return r.mutation({
    query: () => ({ url: o, method: "POST" }),
    async onQueryStarted(i, { dispatch: t, queryFulfilled: e }) {
      try {
        await e;
      } catch (a) {
        console.error("Failed to call logout endpoint...", a);
      } finally {
        t(l()), t(n.util.resetApiState());
      }
    }
  });
}
export {
  d as a,
  y as b
};
//# sourceMappingURL=session-CepdkqF9.js.map
