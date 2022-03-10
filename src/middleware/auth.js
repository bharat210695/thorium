const jwt = require('jsonwebtoken')


const authorise = function(req, res, next) {
    let token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "functionup-thorium")
    let toBeUpdatedUserId = req.params.userId;
    let loggedInUserId = decodedToken.userId;
    if (loggedInUserId != toBeUpdatedUserId) return res.send({ status: false, msg: "you are not authorized to perform this task" })
    else { next() }
}


module.exports.authorise = authorise;