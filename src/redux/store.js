import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/filter-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsApi } from "./contacts/contacts";
import { default as authorizationReducer } from "./authorization/authorization-slice";

const authorizationPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterReducer,
    authorization: persistReducer(
      authorizationPersistConfig,
      authorizationReducer
    ),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);
