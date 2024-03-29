const blogModel = require("../models/blog");
const { mongoose } = require("mongoose");

// Create a blog
const postBlog = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Cover image is required" });
    }
    const blog = new blogModel({
      author: req.user._id,
      coverImage: req.file.path,
      title: req.body.title,
      summary: req.body.summary,
      categories: JSON.parse(req.body.categories),
      content: req.body.content,
    });
    await blog.save();
    res.status(201).json({
      message: "Blog created successfully",
      blog: blog,
    });
    console.log(blog);
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
      .sort({ createdAt: -1 })
      .populate(
        {
          path: "author",
          select: ["createdAt", "name", "profileImage"],
        }
      );
      console.log(blogs);

    res.status(200).json({
      count: blogs.length,
      blogs: blogs,
    });
    console.log(blogs);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
    console.log(err);
  }
};

// Fetch one article
const getOneBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(500).json({ message: `${_id} is not a valid id` });
    const blog = await blogModel.findById(_id).populate({
      path: "author",
      select: ["name", "profileImage", "bio", "blogs"],
    });
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

// Fetch blogs of logged in user
const getBlogsById = async (req, res) => {
  try {
    const authorId = req.user._id;
    const data = await blogModel.find({ id: authorId });
    res.status(200).json({ count: data.length, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(500).json({ message: `${_id} is not a valid id` });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Cover image is required" });
    }
    const blog = await blogModel.findByIdAndUpdate(
      _id,
      {
        coverImage: req.file.path,
        title: req.body.title,
        summary: req.body.summary,
        categories: req.body.categories,
        content: req.body.content,
      },
      {
        new: true,
      }
    );
    res.status(201).json({
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
    res.status(201).json({
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

module.exports = {
  postBlog,
  getBlogs,
  getOneBlog,
  getBlogsById,
  updateBlog,
  deleteBlog,
};
