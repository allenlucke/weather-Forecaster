const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const getMovies = require('./routes/getMovies.router')
const putMovies = require('./routes/putMovies.router')
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/getMovies', getMovies);
app.use('/putMovies', putMovies);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});