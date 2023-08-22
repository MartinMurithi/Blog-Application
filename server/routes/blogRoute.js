const express = require("express");
const routes = express.Router();

const {
  postBlog,
  getBlogs,
  getOneBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const upload = require("../config/multer");
const fileSizeLimitErrorHandler = require("../middlewares/multerFileSize");

routes.post(
  "/blogr.io/api/v1/write",
  upload.single("coverImage"),
  fileSizeLimitErrorHandler,
  postBlog
);
routes.get("/blogr.io/api/v1/articles", getBlogs);
routes.get("/blogr.io/api/v1/articles/:id", getOneBlog);
routes.patch(
  "/blogr.io/api/v1/update/:id",
  upload.single("coverImage"),
  fileSizeLimitErrorHandler,
  updateBlog
);
routes.delete("/blogr.io/api/v1/delete/:id", deleteBlog);

module.exports = routes;
