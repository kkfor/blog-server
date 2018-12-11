const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  // 用户名
  username: { type: String, required: true },
  // 用户密码
  password: { type: String, required: true },
  // 邮箱
  email: { type: String, required: true }
})

const User = mongoose.model('User', UserSchema)

module.exports = User