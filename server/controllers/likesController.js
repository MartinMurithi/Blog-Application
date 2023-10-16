const mongoose = require("mongoose");
const Like = require("../models/LikesModel");

const addLike = async (req, res) => {

    try {
        const like = new Like({
            author: req.user._id,
            articleId: articleId,
            likes: {$inc: {likes: 1}}
        })
        await like.save();
        res.status(201).json("Like added succesfully")
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = { addLike }

// Test the add like route