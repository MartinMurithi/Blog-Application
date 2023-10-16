const express = require("express");
const router = express.Router();
const {saveArticles, deleteSavedArticle, getSavedArticles } = require("../controllers/readingListController");

router.post("/blogr.io/api/v1/save", saveArticles);
router.post("/blogr.io/api/v1/savedArticles/:id", getSavedArticles);
router.post("/blogr.io/api/v1/deleteSavedArticle", deleteSavedArticle);
module.exports = router;