// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString())
console.log(id.toHexString().length)

// console.log(id.getTimestamp())

MongoClient.connect(connectURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if(error) {
    return console.log('Unable to connect to datbase.')
  }

  // console.log('Connected!')

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   _id: id,
  //   name: 'Vikram',
  //   age: 26,
  // }, (error, result) => {
  //   if(error) {
  //     return console.log('Unable to insert user.')
  //   }
  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Jen',
  //     age: 28,
  //   }, {
  //     name: 'Gunther',
  //     age: 27,
  //   },
  // ], (error, result) => {
  //   if(error) {
  //     return console.log('Unable to insert users.')
  //   }

  //   console.log(result.ops)

  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Description of task 1.',
  //     completed: false,
  //   }, {
  //     description: 'Description of task 2.',
  //     completed: false
  //   }, {
  //     description: 'Description of task 3.',
  //     completed: false
  //   },
  // ], (error, result) => {
  //   if(error) {
  //     return console.log('Unable to insert tasks.')
  //   }

  // db.collection('users').findOne({
  //   _id: new ObjectID('5e0f8049cbccec4d4c59a791'),
  // }, (error, user) => {
  //   if(error) {
  //     return console.log('Unable to insert tasks.')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ age: 53 }).toArray((error, users) => {
  //   if(error) {
  //     return console.log('Unable to find users.')
  //   }
  //   console.log(users)
  // })

  // db.collection('users').find({ age: 53 }).count((error, users) => {
  //   if(error) {
  //     return console.log('Unable to find users.')
  //   }
  //   console.log(users)
  // })

  // db.collection('tasks').findOne({
  //   _id: new ObjectID("5e0bb014734be62f20885c09"),
  // }, (error, task) => {
  //   if(error) {
  //     return console.log('Unable to read task.')
  //   }
  //   console.log(task)
  // })

  // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
  //   if(error) {
  //     return console.log('Unable to find tasks.')
  //   }
  //   console.log(tasks)
  // })

  //   console.log(result.ops)
  
  // db.collection('users').updateOne({
  //   name: 'Mike'
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // db.collection('tasks').updateMany({
  //   completed: false
  // },
  // { 
  //   $set: { 
  //     completed: true
  //   }
  // }).then((result) => {
  //   console.log(result.modifiedCount)
  // }).catch((error) => {
  //   console.log(error)
  // })
  // })

  // db.collection('users').deleteMany({
  //   age: 53
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  db.collection('tasks').deleteOne({
    description: 'Description of task 3.'
  }).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
})