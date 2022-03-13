const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")
const memesController = require("../controllers/memesController")
const weatherController = require("../controllers/weatherController")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/cowin/findByDistrictId", CowinController.districtId)

router.get("/getCities", weatherController.getCities)
router.get("/getWeather", weatherController.getWeather)
router.get("/tempOfLondon", weatherController.tempOfLondon)

router.get("/getMemes", memesController.getMemes)
router.post("/meme", memesController.memeCreate)





module.exports = router;