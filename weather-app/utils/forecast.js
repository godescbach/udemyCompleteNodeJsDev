const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = 'https://api.darksky.net/forecast/d37c70bec2d4a83ef7dd18e807711c73/' + 
    longitude + ',' + latitude //37.8267,-122.4233
  request({ url, json: true }, (error, response) => {
    if(error) {
      callback('Unable to connect to the weather service!', undefined)
    }
    else if (response.body.error) {
      callback('Unable to find location!', undefined)
    } else {
      callback(undefined, {
        summary: response.body.daily.data[0].summary,
        temperature: response.body.currently.temperature,
        precipProbability: response.body.currently.precipProbability
      })
    }
  })
}

module.exports = forecast