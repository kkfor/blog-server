import * as mongoose from 'mongoose'

export const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  state: {
    type: Number,
    default: 2  // 0:回收站 | 1:发布 | 2:草稿
  }
})
