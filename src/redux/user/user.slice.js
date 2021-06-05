import { createSlice } from "@reduxjs/toolkit";
import users from "../../data/users";

const initialState = {
  currentUser: null,
  users: users,
  error: null,
  loginError: "",
  signupError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signupStart(state, action) {},
    signupSuccess(state, action) {
      state.signupError = "";
      state.currentUser = action.payload.user;
      state.users.push(action.payload.user);
    },
    signupFailed(state, action) {
      state.signupError = action.payload;
    },

    loginStart(state, action) {},
    loginSuccess(state, action) {
      state.loginError = "";
      state.currentUser = action.payload;
      state.loginSuccess = true;
    },
    loginFailed(state, action) {
      state.loginError = action.payload;
    },
    logout(state) {
      state.currentUser = null;
    },
  },
});

export const {
  signupStart,
  signupSuccess,
  signupFailed,
  loginStart,
  loginSuccess,
  loginFailed,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
