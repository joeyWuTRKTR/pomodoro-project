const Task = require('../task')
const db = require('../../config/mongoose')


db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 5; i++) {
    Task.create({ name: 'task-' + i })
  }
})