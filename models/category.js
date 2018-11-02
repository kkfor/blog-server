const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  id: Number,
  name: {
    type: String
  },
  value: {
    type: String
  }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category