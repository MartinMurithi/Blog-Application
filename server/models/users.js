const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profileImg: {
    type: String,
  },
  biography: {
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
  githubURL: {
    type: String,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;