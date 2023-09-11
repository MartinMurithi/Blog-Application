const jwt = require("jsonwebtoken");
const User = require("../models/users");

// Protect routes from unauthorized users
const protectRoute = async (req, res, next) => {
  try {
    let token;
    token = req.cookies.jwt;

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_KEY);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } else {
      res.status(401).json({ error: "Not authorized, no token" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = protectRoute;
