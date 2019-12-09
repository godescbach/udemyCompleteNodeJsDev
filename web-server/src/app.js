const express = require('express')

const app = express()

app.get('', (req, resp) => {
  resp.send('<h1>Weather</h1>')
})

app.get('/help', (req, resp) => {
  resp.send({
    name: 'Tom',
    age: 53,
  })
})

app.get('/about', (req, resp) => {
  resp.send('<h1>Weather App 1.0</h1>')
})

app.get('/weather', (req, resp) => {
  resp.send({
    location: 'Dallas',
    forecast:  'It\'s Texas in December, so comfortable 70 degrees.'
  })
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})