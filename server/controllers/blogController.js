const blogModel = require("../models/blog");
const { default: mongoose } = require("mongoose");

// Create a blog
const postBlog = async (req, res) => {
  try {
    const blog = await blogModel.create({ ...req.body });
    // await blog.save();
    res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      status: err.status,
      error: err.message,
    });
  }
};

// Fetch all articles
const getBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      status: err.status,
      error: err.message,
    });
  }
};

// Fetch one article
const getOneBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return ressend(`Article with ${_id} does not exist`);
    const blog = await blogModel.findOne(id);
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (err) {
    res.json({
      success: false,
      status: err.status,
      message: err.message,
    });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findByIdAndUpdate(
      { _id: id, ...req.body },
      { new: true }
    );
    if (!blog) {
      res.status(404).json({
        success: false,
        message: "Blog not found!",
      });
    }
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (err) {
    res.json({
      success: false,
      status: err.status,
      error: err.message,
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findByIdAndDelete({ _id: id });
    if (!blog) {
      res.status(404).json({
        success: false,
        message: "Blog not found!",
      });
    }
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      status: err.status,
      error: err.message,
    });
  }
};

module.exports = { postBlog, getBlogs, getOneBlog, updateBlog, deleteBlog };
