const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    coverImage: {
      type: String
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    summary: {
      type: String
    },
    categories: {
      type: Array,
      rewuired: [true, "Atleast on categoery is required"],
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