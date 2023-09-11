import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogrApi = createApi({
  reducerPath: "blogrApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/blogr.io/api/v1",
  }),
  tagTypes: ["Articles"],
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => "/articles",
      providesTags: ["Articles"],
    }),
    getOneArticle: builder.query({
      query: (id) => `/article/${id}`,
      providesTags: ["Articles"],
    }),
    createArticle: builder.mutation({
      query: (article) => ({
        url: "/write",
        method: "POST",
        body: article,
      }),
      invalidatesTags: ["Articles"],
    }),
    updateArticle: builder.mutation({
      query: ({ id, ...article }) => ({
        url: `/article/update/${id}`,
        method: "PUT",
        body: article,
      }),
      invalidatesTags: ["Articles"],
    }),
    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `/delete/article/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Articles"],
    }),
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Articles"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Articles"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "logout",
        method: "POST",
      }),
      invalidatesTags: ["Articles"],
    }),
  }),
});

export const {
  useCreateArticleMutation,
  useGetArticlesQuery,
  useGetOneArticleQuery,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = blogrApi;
