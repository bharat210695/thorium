const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

var moment = require("moment")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const mdlwr = function(req, res, next) {
    const time = moment().format('DD-MM-YYYY, h:mm:ss a');
    const type = req.originalUrl
    const ip = req.ip;
    console.log({ time, type, ip })
}
app.use(mdlwr)








mongoose.connect("mongodb+srv://Rajneesh:LMPiDV0VO2cXL7Qg@cluster0.wdu0f.mongodb.net/bharat?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});