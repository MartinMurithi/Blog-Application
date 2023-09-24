import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { modules } from "../Components/ReactQuillModules";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { categoryOptions } from "../Components/CategoryData";
import { useCreateArticleMutation } from "../redux/api/apiSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Write() {
  const animatedSelectComponent = makeAnimated();
  const navigate = useNavigate();
  const [createArticleHandler, { isError, error, isSuccess }] =
    useCreateArticleMutation();

  const [coverImagePreview, setCoverImagePreview] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState("");

  const handleSelectChange = (options) => {
    setCategories(options);
  };

  const handleImagechange = (e) => {
    const selectedFile = e.target.files[0];
    setCoverImage(e.target.files[0]);

    if (selectedFile) {
      setCoverImage(selectedFile);
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverImagePreview(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("categories", JSON.stringify(categories));
    formData.append("content", content);
    formData.append("coverImage", coverImage);

    await createArticleHandler(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData();
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Blog created successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/articles");
    }
  }, [isSuccess]);

  return (
    <>
      <article className="font-serif mt-2 py-10 md:container md:mx-auto md:shadow-lg md:max-w-[70%]">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col py-2 px-3">
            {coverImagePreview && (
              <img
                src={coverImagePreview}
                alt="Preview"
                className="w-[50%] my-3"
              />
            )}
            <div className="flex flex-col">
              <label htmlFor="coverImg" className="text-lg md:text-xl mb-2">
                Add a cover image
              </label>
              <input
                type="file"
                required
                accept="image/png, image/jpeg, image/jpg, image/avif, image/webp"
                name="coverImage"
                onChange={handleImagechange}
                id="coverImg"
                className="mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm"
              />
              {isError && (
                <p className="text-red-500 text-sm my-2 px-1">
                  *{error?.data?.message}
                </p>
              )}
            </div>

            {/* Artcile title */}
            <textarea
              type="text"
              name="title"
              id="title"
              rows={2}
              placeholder="New post title here..."
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="no-scrollbar p-2 mt-6 font-bold text-xl tracking-wide l
              mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black placeholder:text-sm md:placeholder:text-xl"
            />

            {/* Summary input */}
            <textarea
              name="summary"
              id="summary"
              rows="4"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Add summary"
              className="no-scrollbar mt-6 p-2 tracking-wide md:placeholder:text-lg mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  py-[5px] px-1 placeholder:text-black"
            ></textarea>
          </div>

          {/* Select article category */}
          <Select
            name="category"
            placeholder={"Select upto 5 categories"}
            closeMenuOnSelect={false}
            closeMenuOnScroll={false}
            components={animatedSelectComponent}
            isMulti
            isSearchable
            options={categoryOptions}
            required
            value={categories}
            backspaceRemovesValue
            hideSelectedOptions
            isOptionDisabled={() => categories.length >= 5}
            onChange={handleSelectChange}
            className="px-4 py-4 mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  placeholder:text-black placeholder:text-sm"
          />

          {/* Rich text component */}
          <ReactQuill
            modules={modules}
            theme="snow"
            placeholder="Write your post content here..."
            value={content}
            onChange={setContent}
            className="px-2 py-4 mx-1 outline-1 border-2 border-gray-200 outline-blue-700 rounded-md my-2  placeholder:text-black placeholder:text-sm"
          />

          <button
            type="submit"
            className="bg-green rounded-sm px-6 py-2 text-white text-sm ml-3 md:px-8"
          >
            Publish
          </button>
        </form>
      </article>
    </>
  );
}

export default Write;
