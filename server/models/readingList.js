const mongoose = require("mongoose");

const readingListSchema = mongoose.Schema({
    readerId: {
      type: String  
    },
    articleId: {
      type: String
    }
});

const readingListModel = mongoose.model("readingList", readingListSchema);
module.exports = readingListModel;