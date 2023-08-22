const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    coverImage: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      rewuired: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const blogModal = mongoose.model('Blog', blogSchema);
module.exports = blogModal;