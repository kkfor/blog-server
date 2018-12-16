const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: { type: String, required: true },
  // 文章内容
  content: { type: String, required: true },
  // 文章分类
  category: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  // 文章标签
  tag: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  // 文章状态 false 草稿 | true 发布
  publish: { type: Boolean, default: false },
  // 创建时间
  createdAt: { type: Date, default: Date.now },
  // 更新时间
  updatedAt: { type: Date, default: Date.now },
  // 其他信息
  meta: {
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 }
  }
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article