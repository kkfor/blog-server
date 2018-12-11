const Tag = require('../models/tag')

module.exports = {
  // 添加标签
  async postItem(ctx) {
    const { slug, url } = ctx.request.body
    await Tag.create({ slug, url })
    ctx.send({
      code: 1,
      message: '增加标签成功'
    })
  },

  // 获取全部标签
  async getList(ctx) {
    const result = await Tag.find()

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
