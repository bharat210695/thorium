const jwt = require('jsonwebtoken');
const { invalid } = require('moment');

let authentication = function(req, res, next) {
    let token = req.headers["x-auth-token"];

    if (!token) return res.send({ msg: "token must be present" });

    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    next()
}
module.exports.authentication = authentication