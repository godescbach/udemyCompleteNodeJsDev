require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// ObjectId("5e2dccdcb9cd554fc84aaf31")
// ObjectId("5e305e741c3d1931689fbaf5")
// User.findByIdAndUpdate('5e305e741c3d1931689fbaf5', { age: 1 }).then((user) => {
//   console.log(user)
//   return User.countDocuments({ age: 1 })
// }).then((result) => {
//   console.log(result)
// }).catch((e) => {
//   console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
  return count
}

const deleteTaskAndCountIncomplete = async (id) => {
  await Task.findByIdAndDelete(id)
  return await Task.countDocuments({ completed: false })
  // return count
}

// Tom's id 5e2dccdcb9cd554fc84aaf31
// Andrew's id 5e305e741c3d1931689fbaf5
// updateAgeAndCount('5e305e741c3d1931689fbaf5', 27).then((count) => {
//   console.log(count)
// }).catch((e) => {
//   console.log(e)
// })

// updateAgeAndCount('5e2dccdcb9cd554fc84aaf31', 54).then((count) => {
//   console.log(count)
// }).catch((e) => {
//   console.log(e)
// })

// ObjectId("5e344bf31c3d193168a076a9")
deleteTaskAndCountIncomplete('5e344bf31c3d193168a076a9').then((count) => {
  console.log(count)
}).catch((e) => {
  console.log(e)
})