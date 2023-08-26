import React, { useState } from "react";
import ReactQuill from "react-quill";
import { modules } from "../Components/ReactQuillModules";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { categoryOptions } from "../Components/CategoryData";
import axios from "axios";

function Write() {
  const animatedSelectComponent = makeAnimated();

  const [coverImage, setCoverImage] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState("");

  const handleSelectChange = (options) => {
    setCategories(options);
  };

  const postData = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("categories", JSON.stringify(categories));
    formData.append("content", content);
    formData.append("coverImage", coverImage);
    try {
      const data = await axios.post(
        "http://localhost:5000/blogr.io/api/v1/write",
        formData
      );
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    console.log(`Blog created successfully`);
    console.log(article);
  };

  return (
    <>
      {/* Title section */}
      <article className="font-serif mt-2 py-10 md:container md:mx-auto md:shadow-lg md:max-w-[60%]">
        <form onSubmit={handleSubmit} encType="">
          {/* Cover image */}
          <div className="flex flex-col py-2 px-3">
            <label htmlFor="coverImg" className="text-lg md:text-xl mb-2">
              Add a cover image
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              name="coverImage"
              onChange={(e) => setCoverImage(e.target.files[0])}
              id="coverImg"
              className="mt-3 bg-veryLightGray cursor-pointer"
            />

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
              className="no-scrollbar bg-gray-100 p-2 mt-6 font-bold text-2xl tracking-wide outline-[transparent] placeholder:text-black md:placeholder:text-2xl"
            />

            {/* Summary input */}
            <textarea
              name="summary"
              id="summary"
              rows="4"
              required
              value={summary}
              onChange={(e)=>setSummary(e.target.value)}
              placeholder="Add summary"
              className="no-scrollbar bg-gray-100 mt-6 p-2 text-lg tracking-wide outline-[transparent] placeholder:text-black md:placeholder:text-xl"
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
            isOptionDisabled={() => categories.length >= 3}
            onChange={handleSelectChange}
            className="px-4 py-4"
          />
          {/* Rich text component */}
          <ReactQuill
            modules={modules}
            theme="snow"
            placeholder="Write your post content here..."
            value={content}
            onChange={setContent}
            className="px-2 py-4"
          />
          <button
            type="submit"
            className="bg-green rounded-sm px-6 py-2 text-white text-sm ml-3 md:px-8"
          >
            Publish
          </button>{" "}
        </form>
      </article>
    </>
  );
}

export default Write;
