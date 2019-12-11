const path = require('path')

const express = require('express')

const app = express()

app.set('view engine', 'hbs')
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
    message: 'This is my help page message.'
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

app.listen(3000, () => {
  console.log('Server is up on port 3000.')
})