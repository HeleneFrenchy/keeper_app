import { configureStore } from "@reduxjs/toolkit";
import { keeperApi } from "../services/keeperApi";

export const store = configureStore({
  reducer: {
    [keeperApi.reducerPath]: keeperApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(keeperApi.middleware),
});
