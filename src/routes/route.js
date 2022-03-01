const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController");
const { route } = require('express/lib/application');

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)
router.get("/getUsersData", UserController.getUsersData)
router.get("/getBooksData", BookController.getBooksData)

//=====================================================================//

router.post("/createBook", BookController.createBook)
router.get("/bookList", BookController.bookList)
router.post("getBookInYear", BookController.getBookInYear)
router.get("/getParticularBooks", BookController.getParticularBooks)
router.get("/getXINRBooks", BookController.getXINRBooks)
router.get("/getRandomBooks", BookController.getRandomBooks)



module.exports = router;