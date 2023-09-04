const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const validateEmail = require("../utils/emailValidator");
const SALT_ROUNDS = 10;

// Functions to register users
const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if email is valid
    const isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // Check if email exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Create new user
    const newUser = new User({
      email: req.body.email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LogIn users
const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists in the DB
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    // If email exists, check if provided password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({
      email: user.email,
      userId: user._id
    },
      process.env.JWT_KEY, {
      expiresIn: "1hr"
    })

    res.status(200).json({ message: "LogIn successful", user: user, token: token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerUser, logIn };
