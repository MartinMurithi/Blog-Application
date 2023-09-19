const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      // required: true,
    },
    profileImage: {
      type: String,
    },
    bio: {
      type: String,
    },
    skills: {
      type: Array,
    },
    work: {
      type: String,
    },
    education: {
      type: String,
    },
    websiteURL: {
      type: String,
    },
    technologies: {
      type: Array,
    },
    project: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
