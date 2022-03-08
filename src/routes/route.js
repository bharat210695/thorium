const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const auth = require('../authentication/auth')

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", auth.authentication, userController.getUserData)

router.put("/users/:userId", auth.authentication, userController.updateUser)

router.delete("/users/:userId", auth.authentication, userController.deletedUser)

module.exports = router;