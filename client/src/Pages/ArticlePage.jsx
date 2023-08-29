import React from "react";
import { useParams } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import ProfileModal from "../Components/ProfileModal";
import { useGetOneArticleQuery } from "../redux/api/apiSlice";
import FeedBackUtils from "../Components/FeedBackUtils";

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
    <article className="w-[100%] px-2 my-8 font-serif md:container md:mx-auto md:w-[60%] md:my-14">
      {isError && <p>{error.message}</p>}
      {isFetching || isLoading  }
      <section>
        <h1 className="text-2xl leading-10 font-bold  md:text-3xl">
          {article?.blog?.title || <Skeleton count={2}/>}
        </h1>
        <ProfileModal />
      </section>

      <FeedBackUtils blog={article} />

      {/* Cover Image */}
      <img
        src={`http://localhost:5000/${article?.blog?.coverImage}`}
        alt="Cover Image"
        loading="lazy"
        className="w-[100%] my-10"
      />

      {/* Content */}
      <div
        dangerouslySetInnerHTML={{ __html: article?.blog?.content }}
        className=""
      />

      {/* Categories */}
      <div className="my-10 flex gap-2 flex-wrap">
        {article?.blog?.categories.map((category, index) => {
          return (
            <p
              className="text-xs bg-gray-200 px-3 py-2 rounded-full md:text-sm"
              key={index}
            >
              {category.label}
            </p>
          );
        })}
      </div>
    </article>
  );
}

export default ArticlePage;
