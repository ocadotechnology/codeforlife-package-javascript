import { buildCreateSlice as n, asyncThunkCreator as t } from "@reduxjs/toolkit";
import i from "js-cookie";
const c = n({
  creators: { asyncThunk: t }
});
function l(r) {
  const s = {
    isLoggedIn: !!i.get(r)
  };
  return c({
    name: "session",
    initialState: s,
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
