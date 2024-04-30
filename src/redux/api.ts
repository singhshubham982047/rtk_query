import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: () => "posts",
      providesTags: ["Posts"],
    }),
    getComments: builder.query({ query: () => "comments" }),
    newPost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: "posts",
        method: "Post",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useGetCommentsQuery, useNewPostMutation } =
  postApi;
