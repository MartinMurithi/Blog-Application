import React from "react";
import { Link } from "react-router-dom";
import format from "date-fns/format";
import { FaRegBookmark } from "react-icons/fa";

const LatestBlogsCard = ({ blog }) => {
  const categories = blog?.categories.slice(0, 2).map((category, index) => (
    <li
      className="text-xs bg-gray-200 px-3 py-2 rounded-full md:text-sm"
      key={index}
    >
      {category.value}
    </li>
  ));
  return (
    <section>
      <div className="w-[z0%] bg-green md:max-w-[40%] md:flex md:items-center md:justify-center">
        <div className="overflow-hidden shadow-md  my-4 md:w-[100%]">
          {/* Cover Image */}
          <Link
            to={`/article/${blog?._id}`}
            className="flex-none hidden md:flex"
          >
            <img
              src={`http://localhost:5000/${blog?.coverImage}`}
              alt="cover image"
              loading="lazy"
              className="w-[60%]  object-cover my-4"
              style={{ maxHeight: "", maxWidth: "" }}
            />
          </Link>
          {/* Article Details */}
          <div className="flex-grow p-4">
            {/* Author Information */}
            <div className="flex items-center space-x-2">
              <img
                src={`http://localhost:5000/${blog?.author?.profileImage}`}
                alt=""
                className="w-8 h-8 rounded-full"
              />
              <div>
                <Link to={"/account"} className="text-black hover:underline">
                  {blog?.author?.name}
                </Link>
                <p className="text-sm text-gray-500">
                  {format(new Date(blog?.createdAt), "LLL dd, yyyy")}
                </p>
              </div>
            </div>

            {/* Title */}
            <Link to={`/article/${blog?._id}`} className="block py-2">
              <h2 className="text-lg font-semibold md:text-xl">
                {blog?.title}
              </h2>
            </Link>

            {/* Summary */}
            <Link to={`/article/${blog?._id}`} className="">
              <p className="text-sm line-clamp-2">{blog?.summary}</p>
            </Link>

            {/* Category List and save button */}
            <div className="flex justify-between items-center mt-5">
              <ul className="flex items-center gap-3">{categories}</ul>
              <FaRegBookmark />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogsCard;
