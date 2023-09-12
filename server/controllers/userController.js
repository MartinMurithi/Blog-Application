const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const validateEmail = require("../utils/emailValidator");
const { generateToken, destroyToken } = require("../utils/generateToken");
const SALT_ROUNDS = 10;

// @Desc  Register new users
// @Route /register
// @Access  Public
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
    // generateToken(res, newUser._id);
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//@Desc  Login
//@Route  /login
//@Access Public
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

// @Desc  Logout user out by destryoing token
// @Route /logout
// @Access Private
const logOut = async (req, res) => {
  try {
    destroyToken(res);
    res.status(201).json({ message: "User logged out" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const fetch = async (req, res) => {
  const users = await User.find({});
  res.json({users})
}

module.exports = { registerUser, logIn, logOut, fetch};
