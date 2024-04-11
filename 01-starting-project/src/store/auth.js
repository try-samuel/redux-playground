import { createSlice } from "@reduxjs/toolkit";

const intialAuthenticationState = {
  isAuthenticated: false,
};

const authenticactionSlice = createSlice({
  name: "authenticaction",
  initialState: intialAuthenticationState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authenticactionSlice.actions;

export default authenticactionSlice.reducer;
