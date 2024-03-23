import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const keeperApi = createApi({
  reducerPath: "keeperApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Projects", "Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "tasks",
      providesTags: ["Tasks"],
    }),
    getProjects: builder.query({
      query: () => "projects",
      providesTags: ["Projects"],
    }),

    addTask: builder.mutation({
      query: ({ taskName, description, taskDuration, projectId }) => ({
        url: "tasks",
        method: "POST",
        body: {
          name: taskName,
          description,
          taskDuration,
          remainingTime: taskDuration,
          projectId,
        },
      }),
      invalidatesTags: ["Tasks"],
    }),

    addProject: builder.mutation({
      query: (projectName) => ({
        url: "projects",
        method: "POST",
        body: {
          name: projectName,
          slug: projectName,
          trackedTime: 0,
        },
      }),
      invalidatesTags: ["Projects"],
    }),
    setDisplayed: builder.mutation({
      query: ({ id, displayed }) => ({
        url: `projects/${id}`,
        method: "PATCH",
        body: {
          displayed,
        },
      }),
      invalidatesTags: ["Projects"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
    completeTask: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "PATCH",
        body: {
          completed: true,
        },
      }),
      invalidatesTags: ["Tasks"],
    }),
    resetTimer: builder.mutation({
      query: ({ taskId, taskDuration }) => ({
        url: `tasks/${taskId}`,
        method: "PATCH",
        body: {
          remainingTime: taskDuration,
        },
      }),
      invalidatesTags: ["Tasks"],
    }),

    updateRemainingTime: builder.mutation({
      query: ({ taskId, remainingTime }) => ({
        url: `tasks/${taskId}`,
        method: "PATCH",
        body: {
          remainingTime,
        },
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProjectsQuery,
  useGetTasksQuery,
  useAddProjectMutation,
  useSetDisplayedMutation,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useCompleteTaskMutation,
  useResetTimerMutation,
  useUpdateRemainingTimeMutation,
} = keeperApi;
