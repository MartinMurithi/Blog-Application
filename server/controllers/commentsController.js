const commentModel = require("../models/commentsModel");

// Post comment
const postComment = async (req, res) => {
  try {
    const comment = new commentModel({
      author: req.user._id,
      articleId: req.body.articleId,
      comment: req.body.comment,
    });
      await comment.save();
    res
      .status(201)
      .json({ comment: comment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// fetch comments of a blog
const getComments = async (req, res) => {
  try {
    const articleId = req.query.articleId;
    console.log(articleId);
    const comments = await commentModel
      .find({ articleId })
      .sort({ createdAt: -1 })
      .populate({
        path: 'author',
        select: ['_id', 'name', 'profileImage']
      });

    if (comments.length === 0) { 
      return res.status(200).json({ message: "No comments available" });
    }

    console.log(comments);
    res.status(200).json({ comments });
  } catch (err) {
    console.error("Error fetching comments:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getComments, postComment };
