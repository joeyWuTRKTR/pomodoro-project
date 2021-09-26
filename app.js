const express = require('express')
const exphbs = require('express-handlebars')
const app = express()

const PORT = 3000

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')


app.get('/', function (req, res) {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`app is listening in port: ${PORT}`)
})