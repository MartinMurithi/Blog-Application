const express = require("express");
const { postComment, getComments } = require("../controllers/commentsController");
const protectRoute = require("../middlewares/Auth");
const router = express.Router();

router.post("/blogr.io/api/v1/postcomment", protectRoute, postComment);
router.get("/blogr.io/api/v1/comments", getComments);

module.exports = router;