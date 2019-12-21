const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

//GET movies and genres
router.get('/', (req, res) => {
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