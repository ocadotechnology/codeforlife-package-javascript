import { buildCreateSlice as n, asyncThunkCreator as t } from "@reduxjs/toolkit";
import i from "../utils/cookies.es.js";
const c = n({
  creators: { asyncThunk: t }
});
function l(s) {
  const r = {
    isLoggedIn: !!i.get(s)
  };
  return c({
    name: "session",
    initialState: r,
    reducers: (e) => ({
      login: e.reducer((o) => {
        o.isLoggedIn = !0;
      }),
      logout: e.reducer((o) => {
        o.isLoggedIn = !1;
      })
    }),
    selectors: {
      selectIsLoggedIn: (e) => e.isLoggedIn
    }
  });
}
export {
  l as createSessionSlice,
  c as createSlice
};
//# sourceMappingURL=index.es.js.map
