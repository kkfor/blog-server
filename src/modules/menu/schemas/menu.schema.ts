import { Schema } from 'mongoose'

export const MenuSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})
