require('dotenv').config()
// frameworks & libraries
const path = require('path')
const express = require('express')
// const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
// const MongoStore = require('connect-mongo')(session)
// const mongoose = require('mongoose')
const usePassport = require('./config/passport')
const cors = require('cors')
const app = express()

// middleware
const methodOverride = require('method-override')

// routes
const routes = require('./routes/index.js')
require('./config/mongoose')

const PORT = process.env.PORT || 3000

// app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
// app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

app.use(cors({
  origin: ['https://mysterious-everglades-87446.herokuapp.com'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}))
  // origin: ['http://localhost:3000']
  // origin: ["https://mysterious-everglades-87446.herokuapp.com"],
  // methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  // credentials: true // allow session cookie from browser to pass through


app.use(session({
  secret: 'tomato-backend',
  resave: false,
  saveUninitialized: true,
  // store: new MongoStore({ mongooseConnection: mongoose.connection })
}))
usePassport(app)
app.use('/apis', routes)

// Handle Production
if (process.env.NODE_ENV === 'production') {
  // Direct to Static Folder
  // 需要用path.join連接public資料夾的檔案
  app.use(express.static(path.join(__dirname, '/public/')))
  // Handle SPA
  app.get(/.*/, (req, res) => { 
    console.log(`__dirname: ${__dirname}`)
    res.sendFile(__dirname, '/public/index.html') 
})
}


app.listen(PORT, () => {
  console.log(`app is listening in port: ${PORT}`)
})