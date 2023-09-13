const express = require("express");
const router = express.Router();
const { registerUser, logIn, logOut } = require("../controllers/userController");

router.post("/blogr.io/api/v1/register", registerUser);
router.post("/blogr.io/api/v1/login", logIn);
router.post("/blogr.io/api/v1/logout", logOut);

module.exports = router;