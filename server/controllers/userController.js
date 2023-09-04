const bcrypt = require("bcrypt");
const User = require("../models/users");
const validateEmail = require("../utils/emailValidator");
const SALT_ROUNDS = 10;

// Functions to create users
const registerUser = async (req, res) => {
  try {

    const isEmailValid = validateEmail(req.body.email)
    if (!isEmailValid) {
      return res.status(400).json({error: "Invalid email format"})
    }

    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
      return res.status(409).json({ error: "Email already exists" });
    } else {
      bcrypt.hash(req.body.password, SALT_ROUNDS, (err, hash) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        } else {
          const newUser = new User({
            email: req.body.email,
            password: hash,
          });
          newUser.save();
          console.log(newUser);
          res.status(201).json({ message: "User registered successfully", user: newUser });
        }
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message});
    console.log(err.message);
  }
};

module.exports = { registerUser };
