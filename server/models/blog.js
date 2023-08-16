const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    imageUrl: {
      type: String,
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

const blogModal = mongoose.model('blog', blogSchema);
module.exports = blogModal;