const publisherModel = require("../models/publisherModel")

const publisher = async function(req, res) {

    let publishers = req.body

    let publisherCreated = await publisherModel.create(publishers)

    res.send({ data: publisherCreated })
}

module.exports.publisher = publisher