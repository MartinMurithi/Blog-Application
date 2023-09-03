const bcrypt = require("bcrypt");
const User = require("../models/users");

const SALT_ROUNDS = 10;

// Functions to create users
const registerUser = async (req, res) => {
  try {
    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
      return res.status(409).json({ error: "Email already exists" });
    } else {
      bcrypt.hash(req.body.password, SALT_ROUNDS, (err, hash) => {
        if (err) {
          return res.status(500).json({ error: err });
        } else {
          const newUser = new User({
            email: req.body.email,
            password: hash,
          });
          newUser.save();
          console.log(newUser);
          res.status(201).json({ message: "User registered successfully", user: User });
        }
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message);
  }
};

module.exports = { registerUser };
