import React from "react";
import { useGetCommentsQuery } from "../redux/api/apiSlice";
import CommentCard from "./CommentCard";
import { FaSpinner } from "react-icons/fa6";

const CommentSection = () => {
  const { isLoading, isSuccess, isError, error, data: comments } = useGetCommentsQuery();
  console.log(comments);

  return (
    <div>
      <p className="my-4 font-bold text-lg">`Comments ${comments?.length}`</p>
      {isLoading && <FaSpinner/>}
      {isSuccess && comments !== 0 ? (
        comments?.comments?.map((comment) => {
          return (
            <div key={comment._id}>
              <CommentCard comment={comment} />
            </div>
          );
        })
      ) : (
        <p>No comments available</p>
      )}
    </div>
  );
};

export default CommentSection;
