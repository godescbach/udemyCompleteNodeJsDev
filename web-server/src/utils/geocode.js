const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + 
    encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZ29kZXNjYmFjaCIsImEiOiJjazNxcTB2d24wNGJoM2VtamF1Nm0xNWpkIn0.KK1IUX-LvuDGvWLMHR3RUQ&li1'
  
  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the geo-location service.', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find geo-location.  Try another search', undefined)
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode