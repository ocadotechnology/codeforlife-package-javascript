import cookies from "../utils/cookies"
import createSlice from "./createSlice"

export interface SessionState {
  isLoggedIn: boolean
}

export default function createSessionSlice(sessionMetadataCookieName: string) {
  const initialState: SessionState = {
    isLoggedIn: Boolean(cookies.get(sessionMetadataCookieName)),
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
