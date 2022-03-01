const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    tags: [String],
    year: {
        type: Number,
        default: 2021
    },
    stockAvailable: Boolean,
    isPublished: Boolean,
    totalPages: Number,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: { type: Number, default: 10 }

}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users