const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classifySchema = new Schema({
  id: Number,
  title: {
    type: String
  },
  value: {
    type: String
  }
})

const Classify = mongoose.model('Classify', classifySchema)

module.exports = Classify