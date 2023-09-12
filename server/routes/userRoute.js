const express = require("express");
const router = express.Router();
const { registerUser, logIn, logOut, fetch } = require("../controllers/userController");
const protectRoute = require("../middlewares/Auth");


router.post("/blogr.io/api/v1/register", registerUser);
router.post("/blogr.io/api/v1/login", logIn);
router.post("/blogr.io/api/v1/logout", logOut);
router.get("/blogr.io/api/v1/fetch", fetch);

module.exports = router;