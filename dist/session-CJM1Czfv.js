import "@reduxjs/toolkit/query/react";
import "@reduxjs/toolkit";
function c(n, r, e = "session/login/") {
  return n.mutation({
    query: (o) => ({ url: e, method: "POST", body: o }),
    async onQueryStarted(o, { dispatch: a, queryFulfilled: t }) {
      try {
        await t, a(r());
      } catch (i) {
        console.error("Failed to call login endpoint...", i);
      }
    }
  });
}
function d(n, r, e, o = "session/logout/") {
  return r.mutation({
    query: () => ({ url: o, method: "POST" }),
    async onQueryStarted(a, { dispatch: t, queryFulfilled: i }) {
      try {
        await i;
      } catch (l) {
        console.error("Failed to call logout endpoint...", l);
      } finally {
        t(e()), t(n.util.resetApiState());
      }
    }
  });
}
export {
  c as a,
  d as b
};
//# sourceMappingURL=session-CJM1Czfv.js.map
