import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const userToken = {
  logIn(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  logOut() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const userRegistration = createAsyncThunk(
  "user/registration",
  async user => {
    try {
      const { data } = await axios.post("/users/signup", user);
      userToken.logIn(data.token);
      return data;
    } catch (error) {}
  }
);

export const userLogin = createAsyncThunk("user/login", async user => {
  try {
    const { data } = await axios.post("/users/login", user);
    userToken.logIn(data.token);
    console.log(data);
    return data;
  } catch (error) {}
});

export const userLogout = createAsyncThunk("user/logout", async () => {
  try {
    await axios.post("/users/logout");
    userToken.logOut();
  } catch (error) {}
});

export const userRefresh = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.authorization.token;

    if (!token) {
      return thunkAPI.rejectWithValue();
    }

    userToken.logIn(token);

    try {
      const { data } = await axios.get("/users/current");
      return { user: data, token };
    } catch (error) {}
  }
);
