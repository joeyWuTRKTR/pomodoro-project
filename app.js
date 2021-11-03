// frameworks & libraries
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const session = require('express-session')
const usePassport = require('./config/passport')
const cors = require('cors')
const app = express()

// middleware
const methodOverride = require('method-override')

// routes
const routes = require('./routes')
require('./config/mongoose')

const PORT = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
app.use(cors({
  origin: ['http://localhost:8080'],
}))

app.use(session({
  secret: 'tomato-backend',
  resave: false,
  saveUninitialized: true
}))
usePassport(app)
app.use(routes)


app.listen(PORT, () => {
  console.log(`app is listening in port: ${PORT}`)
})