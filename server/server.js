const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const movies = require('../server/routes/movies.router.js')
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/movies', movies);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});