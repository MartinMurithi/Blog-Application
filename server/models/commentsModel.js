const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema(
  {
    comment: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("Comment", commentsSchema);
module.exports = commentModel;
