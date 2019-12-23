const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js')

//PUT
router.put('/:id', (req,res) => {
    const movieId = req.params.id;
    const changeStatus = req.body.description;
    console.log(movieId, changeStatus);
    const queryString = `UPDATE "movies" SET "description" = '${changeStatus}' WHERE "id" = $1;`;
    pool.query(queryString, [movieId])
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});


module.exports = router;