const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  id: Number,
  title: String,
  content: String,
  category: String,
  publish: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  createAt: {
    type: Date,
    default: Date.now
  },
  updateAt: {
    type: Date,
    default: Date.now
  }
})

articleSchema.index({id: 1})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article