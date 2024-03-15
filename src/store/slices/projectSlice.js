import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "12",
    name: "Inbox",
    slug: "inbox",
    trackedTime: 3600000,
    displayed: true,
  },
  {
    id: "13",
    name: "Workspace",
    slug: "workspace",
    trackedTime: 3600000,
  },

  {
    id: "14",
    name: "CLA",
    slug: "cla",
    trackedTime: 3600000,
  },
  {
    id: "15",
    name: "Project x",
    slug: "project-x",
    trackedTime: 3600000,
  },
];

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action) => {
      return [
        ...state,
        {
          id: "16",
          name: action.payload,
          slug: action.payload,
          trackedTime: 0,
        },
      ];
    },
    setDisplayed: (state, action) => {
      return state.map((project) => {
        if (project.id === action.payload) {
          return {
            ...project,
            displayed: true,
          };
        }
        if (project.displayed) {
          return {
            ...project,
            displayed: false,
          };
        }

        return project;
      });
    },
  },
});

export const { addProject, setDisplayed } = projectSlice.actions;

export default projectSlice.reducer;
