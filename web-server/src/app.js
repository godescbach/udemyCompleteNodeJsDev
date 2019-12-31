const path = require('path')
const express = require('express')
const hbs = require('hbs')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'))
hbs.registerPartials(path.join(__dirname, '../templates/partials'))


// Setup static directory to serve
app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, resp) => {
  resp.render('index', {
    title: 'Weather',
    name: 'Tom Mostyn III'
  })
})

app.get('/about', (req, resp) => {
  resp.render('about',  {
    title: 'About Me',
    name: 'Tom Mostyn III'
  })
})

app.get('/help', (req, resp) => {
  resp.render('help',  {
    title: 'Help',
    message: 'This is my help message.',
    name: 'Tom Mostyn III'
  })
})

app.get('/weather', (req, resp) => {
  if (!req.query.address) {
    return resp.send({
      error: 'You must provide an address.'
    })
  }

  geocode(req.query.address, (error, { longitude, latitude, location } = {}) => {//data) => {
    if (error) {
      return resp.send({ error })
    }
    // console.log(longitude, latitude, location)
    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return resp.send({ error })
      }
  
      const forecastString = forecastData.summary + '  It is currently ' + 
        forecastData.temperature + ' degrees out.  There is a ' + 
        forecastData.precipProbability + ' chance of rain.'
      resp.send({
        forecast: forecastString,
        location,
        address: req.query.address
      })
    })
  })
})

// app.get('/products', (req, resp) => {
//   if (!req.query.search) {
//     return resp.send({
//       error: 'You must provide a search term.'
//     })
//   }
//   resp.send({
//     products: []
//   })
// })

app.get('/help/*', (req, resp) => {
  resp.render('pagenotfound', {
    title: '404',
    message: 'Help article not found.',
    name: 'Tom Mostyn III'
  })
})

app.get('*', (req, resp) => {
  resp.render('pagenotfound', {
    title: '404',
    message: 'Page not found.',
    name: 'Tom Mostyn III'
  })
})


// app.get('/help', (req, resp) => {
//   resp.send({
//     name: 'Tom',
//     age: 53,
//   })
// })

// app.get('/about', (req, resp) => {
//   resp.send('<h1>Weather App 1.0</h1>')
// })

app.get('/weather', (req, resp) => {
  resp.send({
    location: 'Dallas',
    forecast:  'It\'s Texas in December, so comfortable 70 degrees.'
  })
})

// app.com
// app.com/help
// app.com/about

app.listen(port, () => {
  console.log('Server is up on port ' + port + '.')
})