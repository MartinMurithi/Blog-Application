import React, { useState } from "react";
import { useUpdateUserInfoMutation } from "../redux/api/apiSlice";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/api/authSlice";

const SettingsPage = () => {
  const [handleUpdateUserInfo, { isLoading, error }] =
    useUpdateUserInfoMutation();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    bio: "",
    skills: "",
    work: "",
    education: "",
    websiteURL: "",
    technologies: "",
    project: "",
    location: "",
    profileImage: "",
  });
  const [profileImgPreview, setProfileImgPreview] = useState("");

  const handleImageInput = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setUser({ ...user, profileImage: e.target.files[0] });

      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setProfileImgPreview(e.target.result);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("bio", user.bio);
    formData.append("skills", JSON.stringify(user.skills));
    formData.append("education", user.education);
    formData.append("work", user.work);
    formData.append("websiteURL", user.websiteURL);
    formData.append("technologies", JSON.stringify(user.technologies));
    formData.append("project", user.project);
    formData.append("location", user.location);
    formData.append("profileImage", user.profileImage);

    try {
      const res = await handleUpdateUserInfo(formData);
      //dispatch(setUserInfo({...user}));
      console.log(res);
    } catch (err) {
      console.log(err.message || error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await postData();
  };

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
          <form
            className="flex flex-col p-3"
            onSubmit={handleFormSubmit}
            encType="multipart/form-data"
          >
            <label htmlFor="name" className="font-semibold my-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Names"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />
            {console.log(user.name)}
            <label htmlFor="email" className="font-semibold my-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />

            <label htmlFor="profileImage" className="font-semibold my-2">
              Profile image
            </label>
            <div className="flex items-center">
              {profileImgPreview && (
                <img
                  src={profileImgPreview}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
              )}

              <input
                type="file"
                name="profileImage"
                required
                accept="image/png, image/jpeg, image/jpg, image/avif, image/webp"
                onChange={handleImageInput}
                className="mx-1 outline-1 outline-blue-700 my-2 py-[5px] px-1 placeholder:text-black placeholder:text-sm "
              />
            </div>

            {/* Collect basic user profile infor */}
            <p className=" text-xl font-bold md:text-2xl">Basic</p>
            <label htmlFor="websiteURL" className="font-semibold my-2">
              Website URL
            </label>
            <input
              type="url"
              name="websiteURL"
              id="websiteURL"
              placeholder="https://yoursite.com"
              value={user.websiteURL}
              onChange={(e) => setUser({ ...user, websiteURL: e.target.value })}
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
              value={user.location}
              onChange={(e) => setUser({ ...user, location: e.target.value })}
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
              value={user.bio}
              onChange={(e) => setUser({ ...user, bio: e.target.value })}
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
              value={user.skills}
              onChange={(e) => setUser({ ...user, skills: e.target.value })}
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />
            <label htmlFor="technologies" className="font-semibold my-2">
              Technologies used
            </label>
            <textarea
              id="technologies"
              name="technologies"
              placeholder="Any programming languages, frameworks, etc. to hightlight"
              value={user.technologies}
              onChange={(e) =>
                setUser({ ...user, technologies: e.target.value })
              }
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
              value={user.project}
              onChange={(e) => setUser({ ...user, project: e.target.value })}
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
              maxLength={200}
            ></textarea>

            {/* Collect work and educaation */}
            <p className=" text-xl font-bold md:text-2xl">Work</p>
            <label htmlFor="work" className="font-semibold my-2">
              Work
            </label>
            <textarea
              name="work"
              id="work"
              cols="30"
              rows="2"
              placeholder="What dou do ? Example CEO, Network engineer"
              value={user.work}
              onChange={(e) => setUser({ ...user, work: e.target.value })}
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
              value={user.education}
              onChange={(e) => setUser({ ...user, education: e.target.value })}
              className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm "
            />
            <button
              type="submit"
              className="bg-blue-700 py-2 mb-6 text-white rounded-md"
            >
              Save profile information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
