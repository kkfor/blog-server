const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  // 所属文章
  articleId: { type: Schema.Types.ObjectId, ref: 'Article' },
  user: {
    // 昵称
    name: { type: String, required: true },
    // 邮箱
    email: { type: String, required: true },
    // 网站
    site: String
  },
  // 评论内容
  content: { type: String, required: true },
  // 评论时间
  createdAt: { type: Date, default: Date.now }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment