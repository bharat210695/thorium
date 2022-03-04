const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function(req, res) {
    let book = req.body
    let authorId = book.author
    let publisherId = book.publisher

    if (!authorId)
        return res.send('The request is not valid as the author details are required')

    let author = await authorModel.findById(authorId)
    if (!author)
        return res.send('The request is not valid as no author is present with the given author id')

    if (!publisherId)
        return res.send('The request is not valid as the publisher details are required')

    let publisher = await publisherModel.findById(publisherId)
    if (!publisher)
        return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(book)
    return res.send({ data: bookCreated })
}

const getBooks = async function(req, res) {
    let books = await bookModel.find().populate('author publisher')
    res.send({ data: books })
}

const newBook = async function(req, res) {
    const update = await bookModel.updateMany({ $or: [{ "newPublishers": "6220b874860ab9d2649ea6d3" }, { "newPublishers": "6220b8fc860ab9d2649ea6d9" }] }, { "isHardCover": true }, { new: true })
    res.send(update)
}

const newPrice = async function(req, res) {
    const newPrice = await bookModel.updateMany({ ratings: { $gte: 3.5 } }, { price: 10 }, { new: true })
    res.send(newPrice)
}



module.exports.createBook = createBook
module.exports.getBooks = getBooks

module.exports.newBook = newBook
module.exports.newPrice = newPrice