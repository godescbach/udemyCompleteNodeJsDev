const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log('Error', error)
//   console.log('Data', data)
// })

if (process.argv[2]) {
  location = process.argv[2]
} else {
  console.log('Please provide a location.')
  return
}
geocode(process.argv[2], (error, { longitude, latitude, location }) => {//data) => {
  if (error) {
    return console.log(error)
  }
  console.log(longitude, latitude, location)
  forecast(longitude, latitude, (error, forecastData) => {
    if (error) {
      return console.log(error)
    }

    console.log(location)
    console.log(forecastData.summary + '  It is currently ' + 
      forecastData.temperature + ' degrees out.  There is a ' + 
      forecastData.precipProbability + ' chance of rain.')
    // console.log(forecastData)
  })
})