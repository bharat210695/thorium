const { count } = require("console")
const orderModel = require("../models/orderModel")
const OrderModel = require("../models/orderModel")

const orderDetails = async function(req, res) {
    let data = req.body
    let savedData = await orderModel.create(data)
    res.send({ msg: savedData })
}



module.exports.orderDetails = orderDetails