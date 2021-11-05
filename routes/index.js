const express = require('express')
const router = express.Router()

const apiHome = require('./apis/home')
const apiTasks = require('./apis/tasks')
const apiUsers = require('./apis/users')

router.use('/', apiHome)
router.use('/tasks', apiTasks)
router.use('/users', apiUsers)


module.exports = router