const express = require('express') // require the express package
const app = express() // initialize your express app instance
const data = require('./data/weather.json');

const cors = require('cors');

app.use(cors()) // after you initialize your express app instance

require('dotenv').config();

const PORT=process.env.PORT;

// a server endpoint 
app.get('/', // our endpoint name
 function (req, res) { // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})
 
app.get('/weather', // our endpoint name
  function (req, res) { // callback function of what we should do with our request

    const resDataWeather = data.data.map( objDataWeather => new Weather(objDataWeather));
    res.json(resDataWeather);// our endpoint function response
  }
);
class Weather {
    constructor(dataForWeather) {
      this.descriptionWeather = dataForWeather.weather.description;
      this.dateWeather = dataForWeather.valid_date;
    }
  }
  

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
// kick start the express server to work

