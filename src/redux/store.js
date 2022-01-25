import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "./contacts/contacts";
import { filterReducer } from "./filter/filter-reducer";

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
