import React, { useEffect } from "react";
import Header from "../Components/Header";
import PopularPosts from "../Components/TrendingPosts";
import LatestPosts from "../Components/LatestPosts";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/articles");
    }
  }, [navigate, userInfo]);
  return (
    <>
      <Header />
      {/* <PopularPosts /> */}
      {/* <LatestPosts /> */}
      <Footer />
    </>
  );
}

export default Home;
