const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Task = require('../../models/task')

router.post('/', (req, res) => {
  jwt.verify(req.body.token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    Task.find({ userId: user.id })
    .lean()
    .then(tasks => res.send({ tasks }))
    .catch(error => console.log(error))
  })
})

module.exports = router