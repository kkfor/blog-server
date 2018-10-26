const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoosePaginate = require('mongoose-paginate')

const articleSchema = new Schema({
  id: Number,
  title: String,
  content: String,
  classify: String,
  publish: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
})

articleSchema.plugin(mongoosePaginate)
articleSchema.index({id: 1})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article