import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const keeperApi = createApi({
  reducerPath: "keeperApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Projects"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "tasks",
    }),
    getProjects: builder.query({
      query: () => "projects",
      providesTags: ["Projects"],
    }),
    addProject: builder.mutation({
      query: ({ projectName }) => ({
        url: "projects",
        method: "POST",
        body: {
          id: "16",
          name: projectName,
          slug: projectName,
          trackedTime: 0,
        },
      }),
      invalidatesTags: ["Projects"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProjectsQuery, useGetTasksQuery, useAddProjectMutation } =
  keeperApi;
