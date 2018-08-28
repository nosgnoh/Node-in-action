const express = require('express');
const router = express.Router();
const birds = require('./bird.mock');


router.route('/')
    .get((req, res) => {
        res.send(birds);
    })
    .post((req, res) => {
        res.send('Post to bird!');
    });

module.exports = router;