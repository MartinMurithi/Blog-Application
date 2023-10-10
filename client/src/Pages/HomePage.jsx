import React, { useEffect } from "react";
import Header from "../Components/Header";
import PopularPosts from "../Components/TrendingPosts";
import LatestPosts from "../Components/LatestPosts";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetArticlesQuery } from "../redux/api/apiSlice";
import BlogPostCard from "../Components/BlogPostCard";

function Home() {
  const { isError, error, isLoading, data: articles } = useGetArticlesQuery();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/articles");
    }
  }, [navigate, userInfo]);

  const latestArticles = articles?.blogs?.slice(0, 6).map((article) => {
    return (
      <div key={article._id}>
        <BlogPostCard blog={article}  />
      </div>
    );
  });

  return (
    <>
      <Header />
      <div>
        <h3 className="text-3xl my-5 font-bold text-center ">Latest Articles</h3>
      </div>
      <div className="">
        {latestArticles}
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
