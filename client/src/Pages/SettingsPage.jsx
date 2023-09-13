import React from "react";
import { useUpdateUserInfoMutation } from "../redux/api/apiSlice";
import { useDispatch } from "react-redux";

const SettingsPage = () => {

  const [handleUpdateInfo, { isLoading, error }] = useUpdateUserInfoMutation();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await handleUpdateInfo().unwrap();
    } catch (err) {
      console.log(err.message || error);
    }
  }
  
  return (
    <div className=" bg-gray-100 flex px-1 justify-center md:items-center md:gap-3">
      {/* Form container */}
      <div className="w-[90%] flex flex-col md:w-[50%]">
        <p className="text-blue-700 font-bold text-xl mt-4 text-start md:text-[30px] md:mt-8 md:mb-5 ">
          @martinwachira
        </p>

        {/* Collect basic user infor */}
        <div className="bg-white my-4 border-2 border-gray-300 rounded-lg shadow-md">
          <p className=" text-xl font-bold p-3 md:text-2xl">User</p>
          <form className="flex flex-col p-3">
            <label htmlFor="name" className="font-semibold my-2">
              Name
            </label>
            <input
              type="text"
              name="Fullnames"
              id="name"
              placeholder="Full Names"
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />

            <label htmlFor="email" className="font-semibold my-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />

            <label htmlFor="username" className="font-semibold my-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />

            <label htmlFor="profileImage" className="font-semibold my-2">
              Profile image
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/avif, image/webp"
              className="mx-1 outline-1 outline-blue-700 my-2 py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />
          </form>
        </div>

        {/* Collect basic user profile infor */}
        <div className="bg-white my-4 border-2 border-gray-200 rounded-lg shadow-md">
          <p className=" text-xl font-bold p-3 md:text-2xl">Basic</p>
          <form className="flex flex-col p-3">
            <label htmlFor="websiteURL" className="font-semibold my-2">
              Website URL
            </label>
            <input
              type="url"
              name="websiteURL"
              id="websiteURL"
              placeholder="https://yoursite.com"
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />
            <label htmlFor="location" className="font-semibold my-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Nairobi, Kenya"
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />
            <label htmlFor="bio" className="font-semibold my-2">
              Bio
            </label>
            <textarea
              name="bio"
              id="bio"
              cols="30"
              rows="3"
              placeholder="A short Bio"
              maxLength={100}
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            ></textarea>
            <label htmlFor="skills" className="font-semibold my-2">
              Skills
            </label>
            <textarea
              id="skills"
              name="skills"
              placeholder="E.g Web development, App development, cyber security"
              maxLength={100}
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />
            <label htmlFor="technologies" className="font-semibold my-2">
              Technologies used
            </label>
            <textarea
              id="technologies"
              name="technologies"
              placeholder="Any programming languages, frameworks, etc. to hightlight"
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />
            <label htmlFor="project" className="font-semibold my-2">
              Currently working on
            </label>
            <textarea
              name="project"
              id="project"
              cols="30"
              rows="4"
              placeholder="What projects are currently occupying most of your time ?"
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
              maxLength={200}
            ></textarea>
          </form>
        </div>

        {/* Collect work and educaation */}
        <div className="bg-white my-4 border-2 border-gray-200 rounded-lg shadow-md">
          <p className=" text-xl font-bold p-3 md:text-2xl">Work</p>
          <form className="flex flex-col p-3">
            <label htmlFor="work" className="font-semibold my-2">
              Work
            </label>
            <textarea
              name="work"
              id="work"
              cols="30"
              rows="2"
              placeholder="What dou do ? Example CEO, Network engineer"
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            ></textarea>
            <label htmlFor="education" className="font-semibold my-2">
              Education
            </label>
            <input
              type="text"
              name="education"
              id="education"
              placeholder="Where did you go school?"
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />
          </form>
        </div>
        <button
          type="submit"
          className="bg-blue-700 py-2 mb-6 text-white rounded-md"
        >
          Save profile information
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
