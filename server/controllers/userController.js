const bcrypt = require("bcrypt");
const User = require("../models/users");
const validateEmail = require("../utils/emailValidator");
const { generateToken, destroyToken } = require("../utils/generateToken");
const SALT_ROUNDS = 10;

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = new User({
      email: req.body.email,
      password: hashPassword,
    });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("-skills");
    if (!user) {
      return res.status(404).json({ error: "Invalid login credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid login credentials" });
    }

    generateToken(res, user._id);
    res.status(200).json({ message: "LogIn successful", user: user });
    console.log(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const logOut = async (req, res) => {
  try {
    destroyToken(res);
    res.status(201).json({ message: "User logged out" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUserInfo = async (req, res) => {
  try {
    // Extract id to find the user object
    const userId = req.user._id;
    console.log(req.file);
    if (!req.file) {
      return res.status(400).json({ message: "Profile image is required" });
    }
    const user = await User.findByIdAndUpdate(
      { _id: userId },
      {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        profileImage: req.file.path,
        bio: req.body.bio,
        skills: JSON.parse(req.body.skills),
        work: req.body.work,
        education: req.body.education,
        websiteURL: req.body.websiteURL,
        technologies: JSON.parse(req.body.technologies),
        project: req.body.project,
        location: req.body.location,
      }
    );
    res
      .status(200)
      .json({ message: "Information saved successfully", user: user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerUser, logIn, logOut, updateUserInfo };
