const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

//GET movie image, title, and description for home page
router.get('/', (req,res) => {
    const queryString = `SELECT "movies".poster, "movies".title, "movies".description FROM "movies"
    ORDER BY "movies".title;`;
    pool.query(queryString)
    .then((response) => {
        res.send(response.rows);
    })
    .catch((err) => {
        res.sendStatus(500);
    })
})

//GET DETAILS: movies titles,description, and genres
router.get('/details', (req, res) => {
    const queryString = `SELECT "movies".title, "movies".description, "genres".name FROM "movies"
    JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
    JOIN "genres" ON "movies_genres".genres_id = "genres".id
    ORDER BY "movies".title;`;
    pool.query(queryString)
    .then((response) => {
        res.send(response.rows);
    })
    .catch((err) => {
        res.sendStatus(500);
    })
})



module.exports = router;