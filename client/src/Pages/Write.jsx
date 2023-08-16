import React, { useState } from "react";
import ReactQuill from "react-quill";
import { modules } from "../Components/ReactQuillModules";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { categoryOptions } from "../Components/CategoryData";

function Write() {
  const animatedSelectComponent = makeAnimated();

  const [coverImg, setCoverImg] = useState("");
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [content, setContent] = useState("");

  const handleSelectChange = (options) => {
    setCategories(options);
  };

  const article = {
    coverImage: coverImg,
    title: title,
    categories: categories,
    content: content
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(article);
  };

  return (
    <>
      {/* Title section */}
      <article className="font-serif mt-2 py-20 md:container md:mx-auto md:shadow-lg md:max-w-[60%]">
        <form onSubmit={handleSubmit}>
          {/* Cover image */}
          <div className="flex flex-col py-2 px-3">
            <label htmlFor="coverImg" className="text-lg md:text-xl mb-2">
              Add a cover image
            </label>
            <input
              type="file"
              accept="image/*"
              name="coverImg"
              value={coverImg}
              onChange={(e) => setCoverImg(e.target.value)}
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
              className="no-scrollbar mt-6 font-bold text-2xl tracking-wide outline-[transparent] placeholder:text-black md:placeholder:text-2xl"
            />
          </div>
          {/* Select article category */}
          <Select
            name="category"
            placeholder={"Select upto 5 categories"}
            closeMenuOnSelect={false}
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
          <button type="submit" className="bg-green rounded-sm px-6 py-2 text-white text-sm ml-3 md:px-8">
            Publish
          </button>{" "}
        </form>
      </article>
    </>
  );
}

export default Write;
