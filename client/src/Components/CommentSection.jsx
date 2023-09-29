import React, { useState, useRef } from "react";
import {
  useGetCommentsQuery,
  usePostCommentsMutation,
} from "../redux/api/apiSlice";
import CommentCard from "./CommentCard";
import { FaSpinner } from "react-icons/fa6";

const CommentSection = ({articleId}) => {
  const [comment, setComment] = useState("");
  const [showCommentDialog, setShowCommentDialog] = useState(false);
  const [handlePostComment] = usePostCommentsMutation();
  const {
    isLoading,
    isSuccess,
    isError,
    error,
    data: comments,
  } = useGetCommentsQuery(articleId);

  const showCommentInput = () => {
    setShowCommentDialog(true);
  };

  const handleCloseCommentInput = (e) => {
    e.preventDefault();
    setShowCommentDialog(false);
    setComment("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const cm = await handlePostComment({ comment }).unwrap();
      setComment("");
      setShowCommentDialog(false);
      console.log(cm);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="">
      <div className="md:flex md:justify-between md:items-center text-white">
        <p className="my-4 font-bold text-lg">`Comments ${comments?.length}`</p>
        <button
          onClick={showCommentInput}
          className="bg-blue-700 px-2 py-2 rounded-md mx-3"
        >
          Add comment
        </button>
        
      </div>

      {/* Dialog to add comment */}
      {showCommentDialog && (
        <form onSubmit={handleSubmit} className="flex flex-col my-5 px-3">
          <input
            type="text"
            placeholder="Your comment..."
            required
            // value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="outline-1 border-2 border-gray-200 rounded-sm my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm outline-blue-700"
          />
          <div className="my-2 space-x-5">
            <button
              onClick={handleCloseCommentInput}
              className="bg-blue-700 px-2 py-1 rounded-md mx-3 text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-700 px-2 py-1 rounded-md mx-3 text-white"
            >
              { isLoading ? 'Posting' : 'Post' }
            </button>
          </div>
        </form>
      )}

      {isLoading && <FaSpinner />}
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
