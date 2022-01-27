import { createSlice } from "@reduxjs/toolkit";
import * as operations from "./authorization-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isLoading: false,
  errorMessage: null,
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  extraReducers: {
    [operations.userRegistration.pending]: (state, _) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    [operations.userRegistration.fulfilled]: (state, action) => {
      state.user = {
        ...action.payload.user,
      };
      state.token = action.payload.token;
      state.isLogin = true;
      state.isLoading = false;
    },
    [operations.userRegistration.rejected]: (state, action) => {
      state.isLoading = false;
      switch (action.payload) {
        case 400:
          state.errorMessage = "Please, choose another email.";
          break;
        default:
          state.errorMessage = "Ooops, try again later.";
          break;
      }
    },
    [operations.userLogin.pending]: (state, _) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    [operations.userLogin.fulfilled]: (state, action) => {
      state.user = {
        ...action.payload.user,
      };
      state.token = action.payload.token;
      state.isLogin = true;
      state.isLoading = false;
    },
    [operations.userLogin.rejected]: (state, action) => {
      state.isLoading = false;
      switch (action.payload) {
        case 400:
          state.errorMessage =
            "Authorization error, please enter correct data.";
          break;

        default:
          state.errorMessage = "Ooops, try again later.";
          break;
      }
    },
    [operations.userLogout.pending]: (state, _) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    [operations.userLogout.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
      state.isLoading = false;
    },
    [operations.userLogout.rejected]: (state, action) => {
      state.isLoading = false;
      switch (action.payload) {
        case 401:
          state.errorMessage = "Log out erorr.";
          break;

        default:
          state.errorMessage = "Ooops, try again later.";
          break;
      }
    },
    [operations.userRefresh.pending]: (state, _) => {
      state.isLoading = true;
      state.errorMessage = null;
    },
    [operations.userRefresh.fulfilled]: (state, action) => {
      state.user = {
        ...action.payload.user,
      };
      state.token = action.payload.token;
      state.isLogin = true;
      state.isLoading = false;
    },
    [operations.userRefresh.rejected]: (state, _) => {
      state.isLoading = false;
      state.errorMessage = null;
    },
  },
});

export default authorizationSlice.reducer;
