const commentModel = require("../models/commentsModel");

// Post comment
const postComment = async (req, res) => {
  try {
    const comment = new commentModel({
      author: req.user._id,
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

// fetch all comments of a blog
const getComments = async (req, res) => {
  try {
    const comments = await commentModel
      .find({})
      .sort({ createdAt: -1 })
      .populate({
          path: 'author',
          select: ['_id', 'name', 'profileImage']
      });
    res.status(200).json({ comments: comments });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getComments, postComment };
