import { createReducer } from "@reduxjs/toolkit";
import { filter } from "./filter-action";

export const filterReducer = createReducer("", {
  [filter]: (_, action) => action.payload.toLowerCase(),
});
