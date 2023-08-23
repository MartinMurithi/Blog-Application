const blogModel = require("../models/blog");
const { mongoose } = require("mongoose");

// Create a blog
const postBlog = async (req, res) => {
  try {
    const blog = new blogModel({
      coverImage: req.file.path,
      title: req.body.title,
      categories: JSON.parse(req.body.categories),
      content: req.body.content,
    });
    await blog.save();
    res.status(201).json({
      message: "Blog created successfully",
      blog: blog,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Fetch all articles
const getBlogs = async (req, res) => {
  try {
    const blogs = await blogModel
      .find({})
      .select("-__v")
      .sort({ createdAt: -1 });
    res.status(200).json({
      count: blogs.length,
      blogs: blogs,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Fetch one article
const getOneBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(500).json({ message: `${_id} is not a valid id` });
    const blog = await blogModel.findById(_id).select("-__v");
    res.status(200).json({
      blog: blog,
    });
    if (!blog) {
      return res.status(404).json({ message: `Blog does not exist` });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(500).json({ message: `${_id} is not a valid id` });
    }

    const blog = await blogModel.findByIdAndUpdate(
      _id,
      {
        coverImage: req.file.path,
        title: req.body.title,
        categories: req.body.categories,
        content: req.body.content,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Blog updated successfully",
      blog: blog,
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found!",
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(500).json({ message: `${_id} is not a valid id` });

    const blog = await blogModel.findByIdAndDelete(_id);
    res.status(200).json({
      message: "Blog deleted successfully",
      blog: blog,
    });
    if (!blog) {
      return res.status(404).json({
        message: "Blog not found!",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = { postBlog, getBlogs, getOneBlog, updateBlog, deleteBlog };
