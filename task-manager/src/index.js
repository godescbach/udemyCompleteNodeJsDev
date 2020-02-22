const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const router = new express.Router()
// router.get('/test', (req, res) => {
//   res.send('this is from my other router.')
// })

// app.use(router)

app.listen(port, () => {
  console.log('Server is up on port ' + port)

})

const bcrypt = require('bcryptjs')

const myFunction = async () => {
  const password = 'Red12345!'
  const hashedPassword = await bcrypt.hash(password, 8)

  console.log(password)
  console.log(hashedPassword)

  const isMatch = await bcrypt.compare('red12345!', hashedPassword)
  console.log(isMatch)
}

myFunction()