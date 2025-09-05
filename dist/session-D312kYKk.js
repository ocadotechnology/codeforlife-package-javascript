import { l, a as u } from "./session-oI-Ht2C8.js";
function c(n, r = "session/login/") {
  return n.mutation({
    query: (o) => ({ url: r, method: "POST", body: o }),
    async onQueryStarted(o, { dispatch: a, queryFulfilled: t }) {
      try {
        await t, a(u());
      } catch (e) {
        console.error("Failed to call login endpoint...", e);
      }
    }
  });
}
function d(n, r, o = "session/logout/") {
  return r.mutation({
    query: () => ({ url: o, method: "POST" }),
    async onQueryStarted(a, { dispatch: t, queryFulfilled: e }) {
      try {
        await e;
      } catch (i) {
        console.error("Failed to call logout endpoint...", i);
      } finally {
        t(l()), t(n.util.resetApiState());
      }
    }
  });
}
export {
  c as a,
  d as b
};
//# sourceMappingURL=session-D312kYKk.js.map
