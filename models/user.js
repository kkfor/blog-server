const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  id: Number,
  username: String,
  password: String
})

UserSchema.index({id: 1})

const User = mongoose.model('User', UserSchema)

module.exports = User