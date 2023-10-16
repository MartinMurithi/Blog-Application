const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    coverImage: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    summary: {
      type: String,
    },
    categories: {
      type: Array,
      required: [true, "Atleast one categoery is required"],
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Likes",
    },
  },
  { timestamps: true }
);

const blogModal = mongoose.model("Blog", blogSchema);
module.exports = blogModal;
