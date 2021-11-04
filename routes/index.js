const express = require('express')
const router = express.Router()

// const home = require('./modules/home')
// const tasks = require('./modules/tasks')
// const users = require('./modules/users')
const apiHome = require('./apis/home')
const apiTasks = require('./apis/tasks')
const apiUsers = require('./apis/users')

// router.use('/', home)
// router.use('/tasks', tasks)
// router.use('/users', users)
router.use('/apis', apiHome)
router.use('/apis/tasks', apiTasks)
router.use('/apis/users', apiUsers)


module.exports = router