const request = require('request')

const url = 'https://api.darksky.net/forecast/d37c70bec2d4a83ef7dd18e807711c73/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.daily.data[0].summary + ' It is currenlty ' + response.body.currently.temperature + 
    ' degrees out.  There is a ' + response.body.currently.precipProbability + 
    '% chance of rain.')

})