const express = require('express');
const router = express.Router();

// const logger = require('../logger/logger')
// const helper = require('../util/helper')
// const formatter = require('../validator/formatter')
// const lodash = require('lodash')





//====================================//

//1. list of movies
router.get('/movies', function(req, res) {
    res.send('["The Matrix", "Inception", "Dune", "Arrival", "Her", "Gravity"]')
});

//2.  movies/indexNumber
router.get('/movies/:movieId', function(req, res) {
    movie = ["The Matrix", "Inception", "Dune", "Arrival", "Her", "Gravity"]
    let value = req.params.movieId;
    if (value > movie.length - 1) {
        res.send("does not exist")
    } else {
        res.send(movie[value])
    }
});

//3. if the index is greater than the valid maximum value a message is returned
router.get('/movies', function(req, res) {
    res.send([{ id: 1, name: 'The Matrix' }, { id: 2, name: 'Inception' }, { id: 3, name: 'Dune' }, { id: 4, name: 'Arrival' }, { id: 5, name: 'Her' }, { id: 6, name: 'Gravity' }])
});

//4. Each movie object should have values - id, name.
router.get('/films/:filmId', function(req, res) {
    let movie = [{ id: 1, name: 'The Matrix' }, { id: 2, name: 'Inception' }, { id: 3, name: 'Dune' }, { id: 4, name: 'Arrival' }, { id: 5, name: 'Her' }, { id: 6, name: 'Gravity' }]
    let value = req.params.filmId;
    let found = false;
    for (i = 0; i < movie.length; i++) {
        if (movie[i].id == value) {
            found = true
            res.send(movie[i])
            break
        }
    }
    if (found == false) {
        res.send("No movies exists with this id")
    }
});

module.exports = router;