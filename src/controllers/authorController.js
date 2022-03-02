const AuthorModel = require("../models/authorModel")

const author = async function(req, res) {
    let authors = req.body
    let authorCreated = await AuthorModel.create(authors)
    res.send({ data: authorCreated })
}

module.exports.author = author