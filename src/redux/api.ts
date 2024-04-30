import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<string, string>({ query: () => "posts" }),
    getComments: builder.query({ query: () => "comments" }),
  }),
});

export const { useGetPostsQuery, useGetCommentsQuery } = postApi;
