const express = require('express')

const app = express()

app.get('', (req, resp) => {
  resp.send('Hello express!')
})

app.get('/help', (req, resp) => {
  resp.send('Help page')
})

app.get('/about', (req, resp) => {
  resp.send('Weather App 1.0')
})

app.get('/weather', (req, resp) => {
  resp.send('Weather page')
})

// app.com
// app.com/help
// app.com/about

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})