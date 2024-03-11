import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "111",
    name: "Keeper App",
    description: "Stay productive!",
    taskDuration: 3600000,
    projectId: "12",
    isRunning: true,
    remainingTime: 4000,
    remainingSeconds: 4000,
    completed: true,
  },
  {
    id: "222",
    name: "Task name",
    description: "Task Description",
    taskDuration: 4800000,
    projectId: "13",
    isRunning: false,
    remainingTime: 5000,
    remainingSeconds: 5000,
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
    stateTimer: (state, action) => {
      state.value = "some value";
      //Start and Stop timer (The state of the timer should be seen every time it changes)
    },
    fetchTask: (state, action) => {
      state.value = "some value";
      //Fetch tasks of a selected project
    },
  },
});

export const { addTask, deleteTask, completeTask } = taskSlice.actions;

export default taskSlice.reducer;
