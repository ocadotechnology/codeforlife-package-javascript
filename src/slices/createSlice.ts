import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit"

// `buildCreateSlice` allows us to create a slice with async thunks.
const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

export default createSlice
