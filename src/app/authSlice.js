import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  email: "",
  password: ""
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true
      state.email = action.payload.email
      state.password = action.payload.password
    },
    logout: (state, action) => {
      state.status = false,
        state.email = "",
        state.password = ""
    }
  }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer