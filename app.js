// import dotenv
require('dotenv').config()

// frameworks & libraries
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const app = express()

// middleware
const methodOverride = require('method-override')

// routes
const routes = require('./routes/index.js')
require('./config/mongoose')

const PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

// 開放跨域請求
app.use(cors())

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}))

app.use('/apis', routes)

// Handle Production
if (process.env.NODE_ENV === 'production') {
  // Direct to Static Folder
  // 需要用path.join連接public資料夾的檔案
  app.use(express.static(path.join(__dirname, '/public/')))
  // Handle SPA
  app.get(/.*/, (req, res) => { 
    res.sendFile(__dirname, '/public/index.html') 
})
}


app.listen(PORT, () => {
  console.log(`app is listening in port: ${PORT}`)
})