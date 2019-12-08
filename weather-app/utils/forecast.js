const request = require('request')

const forecast = (longitude, latitude, callback) => {
  const url = 'https://api.darksky.net/forecast/d37c70bec2d4a83ef7dd18e807711c73/' + 
  latitude + ',' + longitude //37.8267,-122.4233
  request({ url, json: true }, (error, { body }) => {
    if(error) {
      callback('Unable to connect to the weather service!', undefined)
    }
    else if (body.error) {
      callback('Unable to find location!', undefined)
    } else {
      callback(undefined, {
        summary: body.daily.data[0].summary,
        temperature: body.currently.temperature,
        precipProbability: body.currently.precipProbability
      })
    }
  })
}

module.exports = forecast