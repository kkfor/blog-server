import * as mongoose from 'mongoose'

export const CategorySchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
