const mongoose = require("mongoose");

const likesSchema = mongoose.Schema(
  {
    likes: {
      type: Number,
      default: 0,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const likesModel = mongoose.model("Likes", likesSchema);
module.exports = likesModel;
