import React from "react";
import { useParams } from "react-router-dom";
import format from "date-fns/format";
import {
  FaHandsClapping,
  FaRegComment,
  FaRegBookmark,
  FaRegCirclePlay,
  FaRegShareFromSquare,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  useGetOneArticleQuery,
  useGetArticlesQuery,
} from "../redux/api/apiSlice";
import spinner from "../Components/Spinner/spinner";
import BlogPostCard from "../Components/BlogPostCard";

function ArticlePage() {
  const { _id } = useParams();
  const {
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
    data: article,
  } = useGetOneArticleQuery(_id);
  const { data: articles } = useGetArticlesQuery();

  const categories = article?.blog?.categories.map((category, index) => (
    <li
      className="text-xs bg-gray-200 px-3 py-2 rounded-full md:text-sm"
      key={index}
    >
      {category.label}
    </li>
  ));

  const moreAuthorArticles = articles?.blogs?.filter((blog) => {
    return blog?.author?._id === article?.blog?.author?._id;
  });

  return (
    <>
      <article className="w-[100%] px-2 my-8 font-serif md:container md:mx-auto md:w-[50%] md:my-14">
        {isError && <p>{error?.data?.message}</p>}
        {isLoading || (isFetching && <spinner />)}
        <section>
          <h1 className="text-2xl leading-10 font-bold  md:text-3xl">
            {article?.blog?.title}
          </h1>
          {/* Author Informartion */}
          <div className="flex items-center gap-3 my-8">
            {/* Author image */}
            <div>
              <img
                src={`http://localhost:5000/${article?.blog?.author?.profileImage}`}
                alt="Profile Image"
                className="w-12 h-12 rounded-full"
              />
            </div>
            {/* Name, follow */}
            <div className="flex flex-col">
              <div className="flex gap-2 m-1 items-center cursor-pointer">
                <h5 className="text-sm font-semibold">
                  {article?.blog?.author?.name}
                </h5>
                <p className="text-[15px] text-green">{` . Follow`}</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-sm mx-1">23/09/2023</p>
                <p className="text-sm mx-1">4 min read</p>
              </div>
            </div>
          </div>
        </section>

        {/* Like, comment, save and listen buttons */}
        <div className="flex justify-between items-center mt-6 py-3 border-t-2 border-b-2 border-veryLightGray">
          {/* Left-side utils */}
          <div className="flex gap-5">
            <div className="flex items-center gap-2">
              <FaHandsClapping className="text-xl text-lightGray" />
              <p className="text-sm text-lightGray">23</p>
            </div>
            <div className="flex items-center gap-2">
              <FaRegComment className="text-xl text-lightGray" />
              <p className="text-lightGray text-sm">13</p>
            </div>
          </div>
          {/* Right-side utils */}
          <div className="flex gap-7 items-center">
            <FaRegBookmark className="text-xl text-lightGray" />
            <FaRegCirclePlay className="text-xl text-lightGray" />
            <FaRegShareFromSquare className="text-xl text-lightGray cursor-pointer" />
          </div>
        </div>

        {/* Cover Image */}
        <img
          src={`http://localhost:5000/${article?.blog?.coverImage}`}
          alt=""
          loading="lazy"
          className="w-[100%] my-10"
        />

        {/* Content */}
        <div
          dangerouslySetInnerHTML={{ __html: article?.blog?.content }}
          className="md:text-lg"
        />

        {/* Categories */}
        <div className="my-10 flex gap-2 flex-wrap">
          <ul className="flex flex-wrap gap-2">{categories}</ul>
        </div>

        {/* Clasps, comments */}
        <div className="flex gap-5 px-3">
          <div className="flex items-center gap-2">
            <FaHandsClapping className="text-xl text-lightGray" />
            <p className="text-sm text-lightGray">23</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegComment className="text-xl text-lightGray" />
            <p className="text-lightGray text-sm">13</p>
          </div>
        </div>

        {/* Profile modal */}
        <section className=" my-20">
          {/* Profile image, follow button */}
          <div className="flex justify-between items-baseline mx-3">
            <img
              src={`http://localhost:5000/${article?.blog?.author?.profileImage}`}
              alt="Profile Image"
              loading="lazy"
              className="w-16 h-16 rounded-full mt-5"
            />
            <button className="bg-green px-3 py-1 rounded-full text-white mr-4 cursor-pointer">
              Follow
            </button>
          </div>

          <h5 className="my-3 mx-3 font-bold text-lg md:text-xl">
            Written by {article?.blog?.author?.name}
          </h5>
          <p className="mx-3">3.2k Followers</p>
          <p className="my-2 mx-3 md:text-lg">{article?.blog?.author?.bio}</p>
        </section>
      </article>
      {/* More articles from author */}

      <div className="w-[100%]">
        <h5 className="font-bold px-3 md:text-xl md:text-center">More from {article?.blog?.author?.name}</h5>
        {moreAuthorArticles?.map((article) => {
          return (
            <div key={article._id} className=" mt-6 mb-10">
              <BlogPostCard blog={article}  />
            </div>
          )
        })}
      </div>
    </>
  );
}

export default ArticlePage;
