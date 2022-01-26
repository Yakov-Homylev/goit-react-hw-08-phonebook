import { createSlice } from "@reduxjs/toolkit";
import * as operations from "./authorization-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  extraReducers: {
    [operations.userRegistration.fulfilled]: (state, action) => {
      state.user = {
        ...action.payload.user,
      };
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [operations.userLogin.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.user = {
        ...action.payload.user,
      };
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [operations.userLogout.fulfilled]: (state, _) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },
    [operations.userRefresh.fulfilled]: (state, action) => {
      console.log(action);
      state.user = {
        ...action.payload.user,
      };
      state.token = action.payload.token;
      state.isLogin = true;
    },
    [operations.userRefresh.rejected]: (state, action) => {},
  },
});

export default authorizationSlice.reducer;
