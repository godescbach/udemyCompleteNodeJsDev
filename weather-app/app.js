const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'https://api.darksky.net/forecast/d37c70bec2d4a83ef7dd18e807711c73/37.8267,-122.4233'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to the weather service!')
//   } else if (response.body.error) {
//     console.log('Unable to find location!')
//   } else {
//     console.log(response.body.daily.data[0].summary + ' It is currenlty ' + response.body.currently.temperature + 
//       ' degrees out.  There is a ' + response.body.currently.precipProbability + 
//       '% chance of rain.')
//   }

// })

// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)



forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})


geocode('Boston', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})