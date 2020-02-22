const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body)

  try {
    task.save()
    res.status(201).send(req.body)
  } catch(e) {
    res.status(400).send(e)
  }

  // task.save().then(() => {
  //   res.status(201).send(req.body)
  // }).catch((error) => {
  //   res.status(400).send(error)
  // }) 
})

router.get('/tasks', async (req, res) => {
  try {
    res.send(await Task.find({}))
  } catch(e) {
    res.status(500).send(e)
  }
  // Task.find({}).then((tasks) => {
  //   res.send(tasks)
  // }).catch((error) => {
  //   res.status(500).send(error)
  // })
})

router.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id

  try {
    const task = await Task.findById(_id)
    if (task) {
      res.send(task)
    } else {
      res.status(404).send()
    }
  } catch(e) {
    res.status(500).send(e)
  }
  // Task.findById(_id).then((task) => {
  //   if (!task) {
  //     res.status(500).send()
  //   }
  //   res.send(task)
  // }).catch((error) => {
  //   res.status(500).send(error)
  // })
})

router.patch('/tasks/:id', async (req, res) => {
  requestKeys = Object.keys(req.body)
  allowedKeys = [ 'description', 'completed']

  const isValidOperation = requestKeys.every((key) => allowedKeys.includes(key))

  if(isValidOperation) {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      })

      if(task) {
        res.send(task)
      } else {
        res.status(404).send()
      }
    } catch(e) {
      res.status(500).send(e)
    }  
  } else {
    res.status(400).send({ error: 'Invalid updates!'})
  }
})

router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if(task) {
      res.send(task)
    } else {
      res.status(404).send()
    }
  } catch(e) {
    res.status(500).send(e)
  }
})

module.exports = router