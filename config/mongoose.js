const mongoose = require('mongoose')
const db = mongoose.connection
const urlDB = process.env.MONGODB_URI || 'mongodb://localhost/TimerTask'

mongoose.connect(urlDB, { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})
console.log(urlDB)

module.exports = db