const express = require("express");
const router = express.Router();
const { registerUser, logIn } = require("../controllers/userController");


router.post("/blogr.io/api/v1/register", registerUser);
router.post("/blogr.io/api/v1/login", logIn);

module.exports = router;