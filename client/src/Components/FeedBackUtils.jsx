import React from "react";
import {
  FaHandsClapping,
  FaRegComment,
  FaRegBookmark,
  FaRegCirclePlay,
  FaRegShareFromSquare,
} from "react-icons/fa6";

function FeedBackUtils({blog}) {
  return (
    <div className="flex justify-between items-center mt-6 py-3 border-t-2 border-b-2 border-veryLightGray">
      {/* Left-side utils */}
      <div className="flex gap-5">
        <div className="flex items-center gap-2">
          <FaHandsClapping className="text-xl text-lightGray" />
          <p className="text-sm text-lightGray">23</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegComment className="text-xl text-lightGray" />
          <p className="text-lightGray text-sm">13</p>
        </div>
      </div>
      {/* Right-side utils */}
      <div className="flex gap-7 items-center">
        <FaRegBookmark className="text-xl text-lightGray" />
        <FaRegCirclePlay className="text-xl text-lightGray" />
        <FaRegShareFromSquare className="text-xl text-lightGray cursor-pointer" />
      </div>
    </div>
  );
}

export default FeedBackUtils;
