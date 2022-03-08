const { count } = require("console")
const productModel = require("../models/productModel")


const productDetails = async function(req, res) {
    let data = req.body
    let savedData = await productModel.create(data)
    res.send({ msg: savedData })
}







module.exports.productDetails = productDetails