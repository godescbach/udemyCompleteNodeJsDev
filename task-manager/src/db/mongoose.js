const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})


// const user = new User({
//   name: 'Jane',
//   email: 'jdoe@jane.com',
//   password: 'favoritebooktitle'
// })

// user.save().then(() => {
//   console.log(user)
// }).catch((error) => {
//   console.log('Error: ', error)
// })

// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   }
// })

// const task = new Task({
//   description: 'Get mild salsa for beans and rice.'
// })

// task.save().then(() => {
//   console.log(task)
// }).catch((error) => {
//   console.log('Error: ', error)
// })