const https = require('https')
const url = 'https://api.darksky.net/forecast/d37c70bec2d4a83ef7dd18e807711c73/32.7763,-96.7969'

const request = https.request(url, (response) => {
  // need to listen for chuck to come in and when we're done
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  // this lets us know we're done
  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('An error', error)
})
// this causes the request to get kicked off 
request.end()