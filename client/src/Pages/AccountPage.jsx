import React from "react";
import { useGetUserInfoQuery } from "../redux/api/apiSlice";
import { NavLink } from "react-router-dom";
import BlogList from "../Components/BlogList"
import {
  FaLocationPin,
  FaCakeCandles,
  FaLink,
  FaEnvelope,
} from "react-icons/fa6";
import format from "date-fns/format";

const AccountPage = () => {
  const { isLoading, isError, error, data: user } = useGetUserInfoQuery();
  // Convert the ISO date it date obj
  // const formattedDate = format(new Date(user.createdAt), "LLL dd, yyyy");
  console.log(user);

  const skills = user?.skills?.map((skill, index) => {
    return <li key={index}>{skill}</li>;
  });

  const technologies = user?.technologies?.map((tech, index) => {
    return <li key={index}>{tech}</li>;
  });

  console.log(skills);
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center">
        {/* Profile details section */}
        <div className="border-2 shadow-sm w-[70%] flex flex-col items-center my-7 ">
          <img
            src={`http://localhost:5000/${user?.profileImage}`}
            alt="Profile Picture"
            className="w-24 h-24 rounded-full my-3"
          />
          <NavLink
            to={"/settings"}
            className="bg-blue-800 text-white px-4 py-2 rounded-md ml-auto mr-4"
          >
            Edit profile
          </NavLink>
          <p className="font-bold text-lg my-2">{user?.name}</p>
          <p>{user?.bio}</p>
          <div className="flex items-center justify-center gap-7 my-4">
            <div className="flex gap-2 items-center">
              <FaLocationPin className="text-gray-600" />{" "}
              <p className="text-gray-600">{user?.location}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaCakeCandles className="text-gray-600" />{" "}
              <p className="text-gray-600">joined on {}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaEnvelope className="text-gray-600" />{" "}
              <p className="text-gray-600">{user?.email}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaLink className="text-gray-600" />{" "}
              <p className="text-gray-600">{user?.websiteURL}</p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-10 my-4">
            {/* Work */}
            <div>
              <p className="text-gray-600">Work</p>
              <p className="">{user?.work}</p>
            </div>
            {/* Education */}
            <div>
              <p className="text-gray-600">Education</p>
              <p>{user?.education}</p>
            </div>
          </div>

          {console.log(user)}
        </div>
        {/* {/* More user infor  */}
        <div className="w-[70%] flex gap-2">
          {/* User infor */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center py-8 px-4 border-2 shadow-md">
              <p className="font-bold">Skills</p>
              <ul>{skills}</ul>
            </div>

            <div className="flex flex-col items-center py-8 px-4 border-2 shadow-md">
              <p className="font-bold">Technologies</p>
              <ul>{technologies}</ul>
            </div>

            <div className="flex flex-col items-center py-8 px-4 border-2 shadow-md">
              <p className="font-bold">Current project</p>
              <p>{user?.project}</p>
            </div>
          </div>
          {/* Blog list */}
          <div>
            {/* <BlogList/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
