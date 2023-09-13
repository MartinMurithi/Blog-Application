const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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
  technology: {
    type: String,
  },
  project: {
    type: String,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
