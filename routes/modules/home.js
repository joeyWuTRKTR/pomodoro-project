const express = require('express')
const router = express.Router()
const Task = require('../../models/task')

router.get('/', (req, res) => {
  Task.find()
    .lean()
    .then(tasks => res.render('index', { tasks }))
    .catch(error => console.log(error))
})

module.exports = router