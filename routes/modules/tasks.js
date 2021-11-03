const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const Task = require('../../models/task')

router.post('/', (req, res) => {
  const name = req.body.taskName
  console.log(req.user)
  if (req.user === undefined) {
    return Task.create({ name })     // 存入資料庫
      .then(() => res.redirect('/')) // 新增完成後導回首頁
      .catch(error => console.log(error))
  } else {
    const userId = req.user._id
    return Task.create({ name, userId })     // 存入資料庫
      .then(() => res.redirect('/')) // 新增完成後導回首頁
      .catch(error => console.log(error))
  }
})

router.delete('/:id', (req, res) => {
  return Task.findById(req.params.id)
    .then(task => task.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router