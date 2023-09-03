const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");

router.post("/blogr.io/api/v1/register", registerUser);

module.exports = router;