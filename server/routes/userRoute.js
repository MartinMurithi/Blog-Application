const express = require("express");
const router = express.Router();
const {
  registerUser,
  logIn,
  logOut,
  updateUserInfo,
  fetchUser
} = require("../controllers/userController");
const upload = require("../config/multer");
const fileSizeLimitErrorHandler = require("../middlewares/multerFileSize");
const protectRoute = require("../middlewares/Auth");

router.get("/blogr.io/api/v1/user", protectRoute, fetchUser);
router.post("/blogr.io/api/v1/register", registerUser);
router.post("/blogr.io/api/v1/login", logIn);
router.post("/blogr.io/api/v1/logout", logOut);
router.put(
  "/blogr.io/api/v1/updateuser",
  protectRoute,
  upload.single("profileImage"),
  fileSizeLimitErrorHandler,
  updateUserInfo
);

module.exports = router;
