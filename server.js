const express = require('express');// require the express package
const app = express(); // initialize your express app instance
// const data = require('./data/weather.json');
const axios = require('axios');

const indexController = require('./controller/index.controller');
const weatherController = require('./controller/weather.controller');
const movieController = require('./controller/movie.controller');

const PORT = process.env.PORT;

require('dotenv').config();

const cors = require('cors');

app.use(cors()); 

app.get('/', indexController);

app.get('/weather', weatherController);

app.get('/movies', movieController);

app.listen(PORT, () => {
  console.log(`Server started : ${PORT}`);
});