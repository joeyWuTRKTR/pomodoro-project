require('dotenv').config()
const express = require('express')
const passport = require('passport')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../../models/user')

// Sign In
router.post('/login', (req, res) => {
  // 檢查必要資料
  if(!req.body.email || !req.body.password) {
    return res.json({ status: 'error', message: "required fields didn't exist" })
  }

  // 檢查 user 是否存在與密碼是否正確
  let userEmail = req.body.email
  let password = req.body.password
  User.findOne({ email: userEmail })
    .then(user => {
      if (!user) return res.status(401).json({ status: 'error', message: 'no such user found' })
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ status: 'error', message: 'passwords did not match' })
      }

      // 簽發 token
      let payload = { id: user.id }
      let token = jwt.sign(payload, process.env.JWT_TOKEN)

      return res.json({
        status: 'success',
        message: 'ok',
        token: token,
        user: { id: user.id, name: user.name, email: user.email }
      })
    })
})

// Register
router.post('/register', (req, res) => {
  // 簽發 token
  let payload = { name: req.body.name }
  let token = jwt.sign(payload, process.env.JWT_TOKEN)

  User
    .create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
    })
    .then(() => {
      res.json({
        status: 'success', 
        message: 'Register account successfully!',
        token: token
      })
    })
})

// Get user
router.post('/', (req, res) => {
  User
    .findOne({ email: req.body.email })
    .then(user => res.send({ user }))
    .catch(error => console.log(error))
})


module.exports = router