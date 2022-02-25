const express = require('express');
const router = express.Router();

let persons = [{
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]

router.post("/election", function(req, res) {
    let votingAge = req.query.votingAge

    let name = [];
    for (let i = 0; i < persons.length; i++) {

        if (persons[i].age > votingAge) {

            persons[i].votingStatus = true
            name.push(persons[i])
        }
    }
    if (name.length > 0) {
        return res.send(name)
    } else {

        return res.send("no member found above this age")

    }

})

module.exports = router;