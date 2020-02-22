require('../src/db/mongoose')
const Task = require('../src/models/task')

// ObjectId("5e2ddd54ac446f3f54e04deb")
Task.findByIdAndDelete('5e2ddd54ac446f3f54e04deb').then((user) => {
  console.log(user)
  return Task.countDocuments({ completed: false })
}).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)
})