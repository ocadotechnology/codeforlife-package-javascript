import Cookies from "js-cookie"

import { SESSION_METADATA_COOKIE_NAME } from "../env"
import createSlice from "."

export interface SessionState {
  isLoggedIn: boolean
}

const initialState: SessionState = {
  isLoggedIn: Boolean(Cookies.get(SESSION_METADATA_COOKIE_NAME)),
}

export const sessionSlice = createSlice({
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

export const { login, logout } = sessionSlice.actions
export const { selectIsLoggedIn } = sessionSlice.selectors