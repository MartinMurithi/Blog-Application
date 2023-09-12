const express = require("express");
const router = express.Router();

const {
  postBlog,
  getBlogs,
  getOneBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const upload = require("../config/multer");
const fileSizeLimitErrorHandler = require("../middlewares/multerFileSize");
const protectRoute = require("../middlewares/Auth");

router.post(
  "/blogr.io/api/v1/write",
  upload.single("coverImage"),
  fileSizeLimitErrorHandler,
  protectRoute,
  postBlog
);
router.get("/blogr.io/api/v1/articles", getBlogs);
router.get("/blogr.io/api/v1/article/:id", getOneBlog);
router.patch(
  "/blogr.io/api/v1/article/update/:id",
  upload.single("coverImage"),
  fileSizeLimitErrorHandler,
  updateBlog
);
router.delete("/blogr.io/api/v1/article/delete/:id", deleteBlog);

module.exports = router;
