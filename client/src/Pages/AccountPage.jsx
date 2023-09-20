import React from "react";
import { useGetUserInfoQuery } from "../redux/api/apiSlice";
import { NavLink } from "react-router-dom";
import BlogList from "./ArticlesPage";
import {
  FaLocationPin,
  FaCakeCandles,
  FaLink,
  FaEnvelope,
} from "react-icons/fa6";
import format from "date-fns/format";
import { useGetArticlesQuery } from "../redux/api/apiSlice";
import BlogPostCard from "../Components/BlogPostCard";

const AccountPage = () => {
  const { isLoading, isError, error, data: user } = useGetUserInfoQuery();
  const { data: articles } = useGetArticlesQuery();
  console.log(user);
  console.log(articles);

  const skills = user?.skills?.map((skill, index) => {
    return <li key={index}>{skill}</li>;
  });

  const technologies = user?.technologies?.map((tech, index) => {
    return <li key={index}>{tech}</li>;
  });

  const authorArticles = articles?.blogs?.filter((article) => {
    return article?.author?._id === user?._id;
  });

  // const articleList = authorArticles?.map((article) => {
  //   <BlogPostCard blog={article} />;
  // });

  return (
    <div className="mx-2">
      <div className="flex flex-col justify-center items-center">
        {/* Profile details section */}
        <div className="w-[100%] flex flex-col ml- md:my-7 md:w-[85%] md:border-2 md:shadow-sm md:items-center">
          <img
            src={`http://localhost:5000/${user?.profileImage}`}
            alt="Profile Picture"
            className=" w-16 h-16 rounded-full my-3 md:w-24 md:h-24"
          />
          <NavLink
            to={"/settings"}
            className="bg-blue-800 text-white  rounded-md text-sm px-2 py-2 ml-auto mr-4 md:px-4 md:py-2"
          >
            Edit profile
          </NavLink>
          <p className="font-bold text-lg my-2 md:text-xl">{user?.name}</p>
          <p className="md:text-lg">{user?.bio}</p>
          <div className="flex flex-col  items-start my-4 gap-4 md:items-center md:justify-center md:gap-7  md:my-4 md:flex-row">
            <div className="flex gap-2 items-center">
              <FaLocationPin className="text-gray-600 text-xl md:text-2xl" />
              <p className="text-gray-600 md:text-lg ">{user?.location}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaCakeCandles className="text-gray-600 text-xl md:text-2xl" />
              <p className="text-gray-600 md:text-lg">joined on {}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaEnvelope className="text-gray-600 text-xl md:text-2xl" />
              <p className="text-gray-600 md:text-lg">{user?.email}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaLink className="text-gray-600 text-xl md:text-2xl" />
              <a
                href="https://github.com/MartinMurithi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 md:text-lg"
              >
                {user?.websiteURL}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 my-2 md:flex-row md:justify-between md:items-center md:gap-10 md:my-4">
            {/* Work */}
            <div>
              <p className="text-gray-600 text-lg">Work</p>
              <p className="">{user?.work}</p>
            </div>
            {/* Education */}
            <div>
              <p className="text-gray-600 text-lg">Education</p>
              <p>{user?.education}</p>
            </div>
          </div>

          {console.log(user)}
        </div>
        {/* {/* More user infor  */}
        <div className="w-[100%] flex-col my-2 md:w-[85%] md:flex">
          {/* User infor */}
          <div className="flex flex-col justify-center gap-3 md:flex-row">
            <div className="flex flex-col mx-1 md:py-8 md:px-4 md:border-2 md:shadow-md md:items-center">
              <p className="font-bold">Skills</p>
              <ul>{skills}</ul>
            </div>

            <div className="flex flex-col mx-1 md:py-8 md:px-4 md:border-2 md:shadow-md md:items-center">
              <p className="font-bold">Technologies</p>
              <ul>{technologies}</ul>
            </div>

            <div className="flex flex-col mx-1 md:py-8 md:px-4 md:border-2 md:shadow-md md:items-center">
              <p className="font-bold">Current project</p>
              <p>{user?.project}</p>
            </div>
          </div>
          <p className="font-bold text-lg ml-1
           mt-3 md:my-5 md:text-center md:text-2xl">Your articless</p>
          {/* Blog list */}
          <div className="w-[100%]">
            {authorArticles?.map((article) => {
              return (
                <>
                  <BlogPostCard blog={article} key={article._id} />
                </>
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
