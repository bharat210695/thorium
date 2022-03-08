const UserModel = require("../models/userModel")

const createUser = async function(req, res) {
    let data = req.body
    let savedData = await UserModel.create(data)
    console.log(req.newAtribute)
    res.send({ msg: savedData })
}

const getUsersData = async function(req, res) {
        let allUsers = await UserModel.find()
        console.log(req.newAtribute)
        res.send({ msg: allUsers })
    }
    //=====================================================================//

const userDetails = async function(req, res) {
    let data = req.body
    let saveData = await UserModel.create(data)
    res.send({ msg: saveData })
}


module.exports.userDetails = userDetails

//================================================================//
module.exports.createUser = createUser
module.exports.getUsersData = getUsersData