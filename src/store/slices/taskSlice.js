import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "111",
    name: "Keeper App",
    description: "Stay productive!",
    taskDuration: 36,
    projectId: "12",
    isRunning: true,
    remainingTime: 30,
    completed: false,
  },
  {
    id: "222",
    name: "Task name",
    description: "Task Description",
    taskDuration: 4800000,
    projectId: "13",
    isRunning: false,
    remainingTime: 5000,
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [
        ...state,
        {
          id: "24",
          name: action.payload.taskName,
          description: action.payload.description,
          taskDuration: action.payload.taskDuration,
          remainingTime: action.payload.taskDuration,
          projectId: action.payload.projectId,
        },
      ];
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload); // action.payload = id
    },
    completeTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: true,
          };
        }

        return task;
      });
    },
    resetTimer: (state, action) => {
      state.value = "some value";
      //Reset the timer for the task (If the task duration is 24 minutes the timer will be reset to 24)
    },
    updateRemainingTime: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            remainingTime: action.payload.remainingTime,
          };
        }

        return task;
      });
    },
  },
});

export const { addTask, deleteTask, completeTask, updateRemainingTime } =
  taskSlice.actions;

export default taskSlice.reducer;
