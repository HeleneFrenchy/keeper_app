import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./slices/projectSlice";
import taskReducer from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    tasks: taskReducer,
  },
});
