const express = require('express')
const User = require('../models/user')
const router = new express.Router()

// router.get('/test', (req, res) => {
//   res.send('From a new file.')
// })

router.post('/users', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.status(201).send(user)
  } catch(e) {
    res.status(400).send(e)
  }

  // user.save().then(() => {
  //   res.status(201).send(user)
  // }).catch((error) => {
  //   res.status(400).send(error)
  //   // res.send(error)
  //   console.log('Error: ' + error)
  // })
})

router.get('/users', async (req, res) => {
  try {
    // const users = await User.find({})
    res.send(await User.find({}))
  } catch(e) {
    res.status(500).send(e)
  }
  // User.find({}).then((users) => {
  //   res.send(users)
  // }).catch((error) => {
  //   res.status(500).send(error)
  //   console.log('Error: ' + error)
  // })
})

router.get('/users/:id', async (req, res) => {
  const _id = req.params.id
  try {
    const user = await User.findById(_id)
    if(user) {
      res.send(user)      
    } else {
      res.status(404).send()
    }
  } catch(e) {
      res.status(500).send(e)
  }
  // User.findById(_id).then((user) => {
  //   if (!user) {
  //     res.status(404).send()
  //   }
  //   res.send(user)
  // }).catch((error) => {
  //   res.status(500).send(error)
  // })
  console.log(req.params)

})

router.patch('/users/:id', async (req, res) => {
  const updateKeys = Object.keys(req.body)
  const allowedUpdates = [ 'name', 'email', 'password', 'age' ]
  const isValidOperation = updateKeys.every((update) => allowedUpdates.includes(update))

  if (isValidOperation) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      })
      if(user) {
        res.send(user)
      } else {
        res.status(404).send()
      }
    } catch(e) {
      // validation errors
      res.status(400).send(e)
    }    
  } else {
    return res.status(400).send({ error: 'Invalid updates!' })
  }
})

router.delete('/users/:id', async(req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (user) {
      res.send(user)
    } else {
      res.status(404).send()
    }
  } catch(e) {
    res.status(500).send(e)
  }
})


module.exports = router