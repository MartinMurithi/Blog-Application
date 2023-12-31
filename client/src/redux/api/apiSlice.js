import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "blogrApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/blogr.io/api/v1",
    credentials: "include",
    // prepareHeaders: (headers, { getState }) => {
    //   headers.set("Content-Type", "multipart/form-data");
    //   headers.set("Access-Control-Allow-Origin", "*");
    //   return headers;
    // },
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
        url: "/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Articles"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Articles"],
    }),
    updateUserInfo: builder.mutation({
      query: (user) => ({
        url: "/updateuser",
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["Articles"],
    }),
    getUserInfo: builder.query({
      query: (_id)=> `/user/${_id}`,
        providesTags: ["Articles"],
    }),
    postComments: builder.mutation({
      query: (comment) => ({
        url: "/postcomment",
        method: "POST",
        body: comment
      }),
      invalidatesTags:["Articles"]
    }),
    getComments: builder.query({
      query: () => ({
        url: "/comments",
        providesTags: ["Articles"],
      })
    }),
    saveArticle: builder.mutation({
      query: (article) => ({
        url: "/save",
        method: "POST",
        body: article
      }),
      invalidatesTags: ["Articles"]
    }),
    deleteSavedArticle: builder.mutation({
      query: (_id) => ({
        url: "/deleteSavedArticle",
        method: "DELETE",
        body: _id
      }),
      invalidatesTags: ["Articles"]
    }),
    getSavedArticles: builder.query({
      query: () => ({
        url: `/savedArticles`,
        providesTags: ["Articles"]
      })
    })
  })
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
  useUpdateUserInfoMutation,
  useGetUserInfoQuery,
  useGetCommentsQuery,
  usePostCommentsMutation,
  useSaveArticleMutation,
  useDeleteSavedArticleMutation,
  useGetSavedArticlesQuery
} = apiSlice;
