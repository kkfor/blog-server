const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tagSchema = new Schema({
  slug: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const Tag = mongoose.model('Tag', tagSchema)

module.exports = Tag