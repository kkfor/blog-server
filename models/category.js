const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
  name: { type: String, required: true },
  // 分类名
  slug: { type: String, required: true },
  // 分类url
  url: { type: String, required: true }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category
