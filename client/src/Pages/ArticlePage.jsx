import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProfileModal from "../Components/ProfileModal";
import {
  FaHandsClapping,
  FaRegComment,
  FaRegBookmark,
  FaRegCirclePlay,
  FaRegShareFromSquare,
} from "react-icons/fa6";
import { useGetOneArticleQuery } from "../redux/api/apiSlice";

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

  return (
    <article className="bg-re container mx-auto w-[55%] my-14 font-serif">
      <section>
        {isFetching || (isLoading && <p>Loading...</p>)}
        {isError && <p>{error.message}</p>}

        <h1 className="text-3xl leading-10 font-bold ">
          {article?.blog?.title}
        </h1>
        {/* Profile Modal */}
        <ProfileModal />
      </section>
      {/* Claps, comments, bookmark, listen, share */}
      <div className="flex justify-between items-center mt-3 py-3 border-t-2 border-b-2 border-veryLightGray">
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
        alt="Cover Image"
        loading="lazy"
        className="w-[100%] my-10"
      />
      <div
        dangerouslySetInnerHTML={{ __html: article?.blog?.content }}
        className=""
      />

      {/* Categories */}
      <div className='my-10 flex gap-2'>
        {article?.blog?.categories.map((category, index) => {
          return (
            <p className="text-sm bg-gray-200 px-3 py-2 rounded-full" key={index}>
              {category.label}
            </p>
          );
        })}
      </div>

      {/* Claps, comments, bookmark, listen, share */}
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
    </article>
  );
}

export default ArticlePage;
