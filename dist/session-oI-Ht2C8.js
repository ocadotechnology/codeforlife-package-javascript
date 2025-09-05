import t from "js-cookie";
import { SESSION_METADATA_COOKIE_NAME as n } from "./settings/index.es.js";
import { buildCreateSlice as r, asyncThunkCreator as c } from "@reduxjs/toolkit";
const i = r({
  creators: { asyncThunk: c }
}), a = {
  isLoggedIn: !!t.get(n)
}, o = i({
  name: "session",
  initialState: a,
  reducers: (e) => ({
    login: e.reducer((s) => {
      s.isLoggedIn = !0;
    }),
    logout: e.reducer((s) => {
      s.isLoggedIn = !1;
    })
  }),
  selectors: {
    selectIsLoggedIn: (e) => e.isLoggedIn
  }
}), { login: I, logout: u } = o.actions, { selectIsLoggedIn: m } = o.selectors;
export {
  I as a,
  m as b,
  i as c,
  u as l,
  o as s
};
//# sourceMappingURL=session-oI-Ht2C8.js.map
