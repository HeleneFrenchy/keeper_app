import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";
import taskReducer from "./slices/taskSlice";
import { keeperApi } from "../services/keeperApi";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,

    [keeperApi.reducerPath]: keeperApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(keeperApi.middleware),
});
