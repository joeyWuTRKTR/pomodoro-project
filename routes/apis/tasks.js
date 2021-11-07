const express = require('express')
const router = express.Router()
const Task = require('../../models/task')

router.post('/', async (req, res) => {
  const task = new Task({
    name: req.body.name,
    predictedTime: req.body.predictedTime
  })
  await task.save()
  res.send(task)
})

router.delete('/:id', async (req, res) => {
  try {
    await Task.deleteOne({ _id: req.body.id })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "Task doesn't exist!" })
  }
})

router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })
    if (req.body.name) {
      task.name = req.body.name
    }
    if (req.body.period) {
      task.period = req.body.period
    }
    if (req.body.counter) {
      task.counter = req.body.counter
    }
    await task.save()
    res.send(task)
  } catch {
    res.status(404)
    res.send({ error: "Task doesn't exist!" })
  }
})

module.exports = router