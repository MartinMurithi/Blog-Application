import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Custom fetchBaseQuery, to add cookie in the request headers of requests

// const customBaseQuery = fetchBaseQuery({
//   baseUrl: "http://localhost:5000/blogr.io/api/v1",
//   // Customize Request Header
//   prepareHeaders: (headers) => {
//     // Retrieve the JWT from the cookie
//     const jwtCookie = document.cookie.split(';').find((cookie) => cookie.trim().startsWith('jwt='));

//     if (jwtCookie) {
//       const jwtToken = jwtCookie.split('=')[1];
//       // Include the token in the authorization header
//       headers.set('Authorization', `Bearer ${jwtToken}`);
//        console.log("Headers with Authorization:", headers);
//     }else {
//       console.log("JWT token not found in cookie.");
//     }

//     return headers;
//   }
// })

export const apiSlice = createApi({
  reducerPath: "blogrApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/blogr.io/api/v1",
    credentials: "include"
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
      query: ({id, ...user}) => ({
        url: "/updateuser",
        method: "PUT",
        body: user
      }),
      invalidatesTags: ["Articles"]
    })
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
  useUpdateUserInfoMutation
} = apiSlice;
