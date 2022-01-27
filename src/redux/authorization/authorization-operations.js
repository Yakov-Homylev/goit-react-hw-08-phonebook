import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const userToken = {
  logIn(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  logOut() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const userRegistration = createAsyncThunk(
  "user/registration",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", user);
      userToken.logIn(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const userLogin = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", user);
      userToken.logIn(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const userLogout = createAsyncThunk(
  "user/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      userToken.logOut();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

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
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);
