const express = require('express');
const router = express.Router();

let players = [];
router.post('/players', function(req, res) {
    let player = req.body;
    let playerName = players.name;
    for (let i = 0; i < players.length; i++) {
        if (players[i].name == playerName) {
            res.send("player already exists");
        }
    }
    players.push(player);
    console.log('here is the player from request', players);
    res.send(players);

});

//===================================================================================//

router.post('/players/:playerName/bookings/:bookingId', function(req, res) {
        let name = req.params.playerName
        let isPlayerPresent = false

        for (let i = 0; i < players.length; i++) {
            if (players[i].name == name) {
                isPlayerPresent = true
            }
        }
        if (!isPlayerPresent) {
            return res.send('Player not present')
        }

        let booking = req.body
        let bookingId = req.params.bookingId
        for (let i = 0; i < players.length; i++) {
            if (players[i].name == name) {
                for (let j = 0; j < players[i].bookings.length; j++) {
                    if (players[i].bookings[j].bookingNumber == bookingId) {
                        return res.send('Booking with this id is already present')
                    }
                }
                players[i].bookings.push(booking)
            }
        }
        res.send(players)
    }),
    module.exports = router;