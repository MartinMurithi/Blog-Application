import React from "react";

const CommentCard = ({comment}) => {

  return (
    <section className="my-8 px-3">
      {/* Comment author */}
      <div className="flex gap-3 items-center bg-red-400 my-3">
        <img
          src={`http://localhost:5000/${comment?.author?.profileImage}`}
          alt="profile image"
          className="h-8 w-8 rounded-full"
        />
        <p>{ comment?.author?.name }</p>
        <p>{ comment?.createdAt }</p>
      </div>
      {/* comment */}
      <p>{ comment?.comment }</p>
    </section>
  );
};

export default CommentCard;
