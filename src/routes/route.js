const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})



router.post("/author", authorController.author)
router.post("/publisher", publisherController.publisher)
router.post("/book", bookController.book)

router.get("/allDetails", bookController.allDetails)


module.exports = router;