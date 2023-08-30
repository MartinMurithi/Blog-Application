import React from "react";
import Skeleton from "react-loading-skeleton";

function ProfileModal() {
  return (
    <div className="flex items-center gap-3 my-8">
      {/* Author image */}
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOrUxWoOcFvZpXT3_3Ur1RSKF6HJJ_S13FCCgB6FDdmA&s"
          alt=""
          className="w-12 h-12 rounded-full"
        />
      </div>
      {/* Name, follow */}
      <div className="flex flex-col">
        <div className="flex gap-2 m-1 items-center cursor-pointer">
          <h5 className='text-sm font-semibold'>{`Martin Wachira` || <Skeleton/>}</h5>
          <p className='text-[15px] text-green'>{` . Follow` || <Skeleton/>}</p>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-sm mx-1'>{`Aug 9` || <Skeleton/>}</p>
          <p className='text-sm mx-1'>{`4 min read` || <Skeleton/>}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
