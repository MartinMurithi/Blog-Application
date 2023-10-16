const mongoose = require("mongoose");
const readingListModel = require("../models/readingList");
const blogModel = require("../models/blog");

const saveArticles = async (req, res) => {
  try {
    const article = new readingListModel({
      articleId: req.body.articleId,
      readerId: req.body.readerId,
    });
    await article.save();
    console.log(article);
    res.status(201).json({ message: "Article saved successfully", article });
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};

const getSavedArticles = async (req, res) => {
  try {
    const articleId = req.params.id;

    //get the id of the currently logged in user
    const readerId = req.user._id;

    // query all the articles with the reader id
    const savedArticles = await mongoose.find({ readerId });
    console.log(savedArticles);

    if (savedArticles.length === 0) {
      return res.status(200).json({ message: "No saved articles" });
    }
    // Fetch the actual article based on article Id
    const actualArticles = [];
    for (const savedArticle in savedArticles) {
        const article = await blogModel.findById(savedArticle.articleId);
        console.log(article);
      if (article) {
        actualArticles.push(article);
      }
    }

    res.status(200).json(actualArticles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteSavedArticle = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(500).json({ error: `${_id} is not a valid id` });
    }
    const article = mongoose.findByIdAndDelete(_id);
    res.status(201).json({ message: "Saved article deleted", article });
    if (!article) {
      return res.status(404).json({ error: "Article does not exist" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveArticles, deleteSavedArticle, getSavedArticles };
