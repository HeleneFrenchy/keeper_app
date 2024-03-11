import "./App.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import ReactDOM from "react-dom";
import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";

import { store } from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <DarkModeProvider>
      <Provider store={store}>
        <div className=" dark:bg-black h-screen">
          <Navbar />
          <AddTask />
          <TaskList />
        </div>
      </Provider>
    </DarkModeProvider>
  );
}
