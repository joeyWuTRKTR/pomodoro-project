const mongoose = require('mongoose')
const Schema = mongoose.Schema
const taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  period: {
    type: Number,
    default: 0
  },
  counter: {
    type: Number,
    default: 0
  },
  predictedTime: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    index: true
  }
})
module.exports = mongoose.model('Task', taskSchema)