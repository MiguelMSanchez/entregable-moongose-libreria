const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BooksSchema = new Schema ({
    Title: String,
    Author: String
});

module.exports = mongoose.model('Author', BooksSchema);
