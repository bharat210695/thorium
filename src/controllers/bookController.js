const { count } = require("console")
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const book = async function(req, res) {
    let books = req.body
    let authorId = books.authors
    let publisherId = books.publishers

    if (!authorId)
        return res.send('The request is not valid as the author details are required')

    let authors = await authorModel.findById(authorId)
    if (!authors)
        return res.send('The request is not valid as no author is present with the given author id')

    if (!publisherId)
        return res.send('The request is not valid as the publisher details are required')

    let publishers = await publisherModel.findById(publisherId)
    if (!publishers)
        return res.send('The request is not valid as no publisher is present with the given publisher id')

    let bookCreated = await bookModel.create(books)
    return res.send({ data: bookCreated })
}

const allDetails = async function(req, res) {
    let allBooks = await bookModel.find().populate('author publisher')
    res.send({ data: allBooks })
}

module.exports.book = book
module.exports.allDetails = allDetails