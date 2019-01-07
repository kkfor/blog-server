const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ZhuanlanSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  // 创建时间
  createdAt: { type: Date, default: Date.now }
})

const Zhuanlan = mongoose.model('Zhuanlan', ZhuanlanSchema)

module.exports = Zhuanlan
