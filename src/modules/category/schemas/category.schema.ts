import { Schema } from 'mongoose'

export const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
