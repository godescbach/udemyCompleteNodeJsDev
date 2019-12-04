const request = require('request')

const url = 'https://api.darksky.net/forecast/d37c70bec2d4a83ef7dd18e807711c73/37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to the weather service!')
  } else if (response.body.error) {
    console.log('Unable to find location!')
  } else {
    console.log(response.body.daily.data[0].summary + ' It is currenlty ' + response.body.currently.temperature + 
      ' degrees out.  There is a ' + response.body.currently.precipProbability + 
      '% chance of rain.')
  }

})

//pk.eyJ1IjoiZ29kZXNjYmFjaCIsImEiOiJjazNxcTB2d24wNGJoM2VtamF1Nm0xNWpkIn0.KK1IUX-LvuDGvWLMHR3RUQ
//https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ29kZXNjYmFjaCIsImEiOiJjazNxcTB2d24wNGJoM2VtamF1Nm0xNWpkIn0.KK1IUX-LvuDGvWLMHR3RUQ&limit=1

const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZ29kZXNjYmFjaCIsImEiOiJjazNxcTB2d24wNGJoM2VtamF1Nm0xNWpkIn0.KK1IUX-LvuDGvWLMHR3RUQ&li1'

request({ url: url1, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to the geo-location service.')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find geo-location.')
  } else {
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]
    console.log(response.body.features[0].center)
    console.log(longitude, latitude)
  }
})