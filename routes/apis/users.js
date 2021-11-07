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
      let token = jwt.sign(payload, process.env.JWT_SECRET)

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
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) return res.send({ message: '帳號已被註冊' })
      User
      .create({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
      })
      .then(() => {
        User.findOne({ email: req.body.email })
          .then(user => {
            // 簽發 token
            let payload = { id: user._id }
            let token = jwt.sign(payload, process.env.JWT_SECRET)

            res.json({
              status: 'success', 
              message: 'Register account successfully!',
              token: token,
              user: { id: user._id , name: user.name, email: user.email }
            })}
          )
          .catch(error => console.log(error))
      })
    })
})

// Get user for checking if the email exists
router.post('/', (req, res) => {
  User
    .findOne({ email: req.body.email })
    .then(user => res.send({ user }))
    .catch(error => console.log(error))
})

// send current user
// 不能用res.locals，因為res.locals用在渲染頁面上才能使用
// 因此透過前端傳一個攜帶token的post請求
// 後端用jwt.verify，輸入token跟密鑰解開user ID
// 透過user ID到資料庫找使用者資料，回傳給前端
router.post('/getCurrentUser', (req, res) => {
  jwt.verify(req.body.token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    User.findById({ _id: user.id })
      .then(findUser => res.send({ 
        id: findUser._id,
        name: findUser.name, 
        email: findUser.email 
        }) 
      )
      .catch(error => console.log(error))
  })
})


module.exports = router