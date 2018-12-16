const Tag = require('../models/tag')
const Article = require('../models/article')
const auth = require('../utils/auth')

module.exports = {
  // 添加标签
  async postItem(ctx) {
    const { name, slug, url } = ctx.request.body
    await Tag.create({ slug, url, name })
    ctx.send({
      code: 1,
      message: '增加标签成功'
    })
  },

  // 获取全部标签
  async getList(ctx) {
    const isAdmin = auth(ctx.request)
    const $match = isAdmin
      ? {}
      : { publish: true }
    const tags = await Tag.find()
    const counts = await Article.aggregate([
      { $match },
      { $unwind: '$tag' },
      { $group: {
        _id: '$tag',
        num_tutorial: { $sum: 1 }
      } }
    ])
    const result = tags.map(tag => {
      const finded = counts.find(c => String(c._id) === String(tag._id))
      tag.count = finded ? finded.num_tutorial : 0
      return tag
    })

    ctx.send({
      code: 1,
      message: '获取标签成功',
      result
    })
  },

  // 通过id获取标签
  async getItem(ctx) {
    let { id } = ctx.params
    const result = await Tag.findById(id)
    ctx.send({
      code: 1,
      message: '获取标签成功',
      result
    })
  },

  // 通过id删除标签
  async delItem(ctx) {
    const { id } = ctx.params
    const result = await Tag.findByIdAndRemove(id)
    ctx.send({
      code: 1,
      message: '删除标签成功',
      result
    })
  },

  // 更新标签
  async putItem(ctx) {
    const { id } = ctx.params
    const req = ctx.request.body
    await Tag.findByIdAndUpdate(id, {
      ...req
    })
    ctx.send({
      code: 1,
      message: '更新标签成功'
    })
  }
}
