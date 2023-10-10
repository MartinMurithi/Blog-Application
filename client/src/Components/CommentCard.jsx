import React, { useState } from "react";
import { Link } from "react-router-dom";
const CommentCard = ({ comment }) => {

  return (
    <section className="my-8 px-3 shadow-qm">
      {/* Comment author */}
      <div className="flex gap-3 items-center my-3">
        <img
          src={`http://localhost:5000/${comment?.author?.profileImage}`}
          alt="profile image"
          className="h-10 w-10 rounded-full"
        />
        <div className="flex flex-col md:flex">
           <Link
              to={`/account/${comment?.author?._id}`}
              className="text-black text-sm hover:underline my-1 font-bold"
            >
            {comment?.author?.name}
            </Link>
        <p className="text-sm">{ comment?.createdAt }</p>
        </div>
       
      </div>
      {/* comment */}
      <p className="text-lg">{ comment?.comment }</p>
    </section>
  );
};

export default CommentCard;
