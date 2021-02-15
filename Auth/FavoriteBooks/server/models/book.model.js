const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    name: {
      type: String,
    }
  }, {timestamps: true});

  module.exports.BookSchema=BookSchema;
  module.exports.Book = mongoose.model("Book", BookSchema);
