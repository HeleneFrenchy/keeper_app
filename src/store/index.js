import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";
import { keeperApi } from "../services/keeperApi";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,

    [keeperApi.reducerPath]: keeperApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(keeperApi.middleware),
});
