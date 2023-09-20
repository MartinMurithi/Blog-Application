import React from "react";
import { useParams } from "react-router-dom";
import format from "date-fns/format";
import { useGetOneArticleQuery } from "../redux/api/apiSlice";
import FeedBackUtils from "../Components/FeedBackUtils";
import spinner from "../Components/Spinner/spinner";

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


  console.log(article);
  return (
    <article className="w-[100%] px-2 my-8 font-serif md:container md:mx-auto md:w-[60%] md:my-14">
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
              alt=""
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
              <p className="text-sm mx-1">
                23/09/2023
              </p>
              <p className="text-sm mx-1">4 min read</p>
            </div>
          </div>
        </div>
      </section>

      <FeedBackUtils blog={article} />

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
        {article?.blog?.categories.map((category, index) => (
          <p
            className="text-xs bg-gray-200 px-3 py-2 rounded-full md:text-sm"
            key={index}
          >
            {category.label}
          </p>
        ))}
      </div>
    </article>
  );
}

export default ArticlePage;
