import React from "react";
import { useGetArticlesQuery } from "../redux/api/apiSlice";
import BlogPostCard from "../Components/BlogPostCard";
import Spinner from "../Components/Spinner";

function BlogList() {
  const {
    isLoading,
    isSuccess,
    error,
    isError,
    data: articles,
  } = useGetArticlesQuery();
  
  return (
    <>
      {isError && <p className="text-red-500 text-lg">{error?.data?.message}</p>}
      {isLoading && <Spinner/>}

      {isSuccess && articles.length !== 0
        ? articles?.blogs?.map((blog) => {
            return <BlogPostCard blog={blog} key={blog._id} />;
          })
        : null}
    </>
  );
}

export default BlogList;
