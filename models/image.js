const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ImageSchema = new Schema({
  article: { type: Schema.Types.ObjectId, ref: 'article' },
  image: { type: String, required: true },
  url: { type: String, rquired: true }
})

const Image = mongoose.model('Image', ImageSchema)

module.exports = Image
