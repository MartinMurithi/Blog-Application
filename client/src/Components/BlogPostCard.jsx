import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import format from "date-fns/format";
import { Link } from "react-router-dom";

function BlogPostCard({ blog }) {

  return (
    <div className=" md:container md:mx-auto md:w-[80%]" key={blog._id}>
      <Link
        to={`/article/${blog._id}`}
        key={blog._id}
        className="flex mt-4 items-center md:justify-center"
      >
        <section className="w-[40%]">
          {/* Profile Modal  */}
          <div className="flex items-center gap-3 p-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrUxWoOcFvZpXT3_3Ur1RSKF6HJJ_S13FCCgB6FDdmA&s"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <p className="text-sm font-bold">Martin Wachira</p>
            <p className=" hidden p-2 text-sm md:block ">
              {format(new Date(blog.createdAt), "LLL dd, yyyy")}
            </p>
          </div>

          <h3 className="font-bold px-2 break-words text-base md:text-xl my-1">
            {blog.title}
          </h3>
          {/* Blog summary */}
          <p className="px-2 hidden md:text-base md:block md:line-clamp-3">{blog.summary}</p>

          {/*  categories*/}
          <div className="flex items-center space-x-4 m-2">
            {blog?.categories?.slice(0, 2).map((category, index) => {
              return (
                <p className="text-xs bg-gray-200 px-3 py-1 rounded-full hidden md:block" key={index}>
                  {category.value}
                </p>
              );
            })}
          </div>
        </section>
        {/* Cover Image */}
        <div className=" flex items-end gap-7">
          <FaRegBookmark className="text-lg cursor-pointer hidden md:block" />
          <img
            src={`http://localhost:5000/${blog.coverImage}`}
            alt="cover image"
            loading="lazy"
            className="w-[100px] h-[100px] max-w-[100%] md:w-[140px] md:h-[140px]"
          />
        </div>
      </Link>


      {/* Save and categories for mobile */}
      <div className="flex items-center space-x-4 mt-3 pr-2 md:hidden">
        {blog.categories.slice(0, 2).map((category, index) => {
          return (
            <p className="text-xs bg-gray-200 px-2 py-1 rounded-full" key={index}>
              {category.value}
            </p>
          );
        })}
        <FaRegBookmark className="text-lg cursor-pointer " />
      </div>
    </div>
  );
}
export default BlogPostCard;
