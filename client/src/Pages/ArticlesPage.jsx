import React from "react";
import { useGetArticlesQuery } from "../redux/api/apiSlice";
import BlogPostCard from "../Components/BlogPostCard";

function BlogList() {
  const {
    isLoading,
    isFetching,
    isSuccess,
    error,
    isError,
    data: articles,
  } = useGetArticlesQuery();
console.log(articles);
  return (
    <>
      {isError ? <p>{error?.data?.message}</p> : null}
      {isFetching || isLoading ? <p>Loading...</p> : null}

      {isSuccess && articles.length !== 0
        ? articles?.blogs?.map((blog) => {
            return <BlogPostCard blog={blog} key={blog._id} />;
          })
        : null}
    </>
  );
}

export default BlogList;
