import Cookies from "js-cookie"

import createSlice from "./createSlice"

export interface SessionState {
  isLoggedIn: boolean
}

export default function createSessionSlice(sessionMetadataCookieName: string) {
  const initialState: SessionState = {
    isLoggedIn: Boolean(Cookies.get(sessionMetadataCookieName)),
  }

  return createSlice({
    name: "session",
    initialState,
    reducers: create => ({
      login: create.reducer(state => {
        state.isLoggedIn = true
      }),
      logout: create.reducer(state => {
        state.isLoggedIn = false
      }),
    }),
    selectors: {
      selectIsLoggedIn: session => session.isLoggedIn,
    },
  })
}
