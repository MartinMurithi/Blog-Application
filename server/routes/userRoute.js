const express = require("express");
const router = express.Router();
const { registerUser, logIn } = require("../controllers/userController");
const protectRoute = require("../middlewares/Auth");


router.post("/blogr.io/api/v1/register", protectRoute, registerUser);
router.post("/blogr.io/api/v1/login", logIn);

module.exports = router;