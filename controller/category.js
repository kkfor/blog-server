const Category = require('../models/category')

module.exports = {
  // 添加分类
  async postItem(ctx) {
    const { slug } = ctx.request.body
    await Category.create({ slug })
    ctx.send({
      code: 1,
      message: '增加分类成功'
    })
  },

  // 获取全部分类
  async getList(ctx) {
    const data = await Category.find()

    ctx.send({
      code: 1,
      message: '获取分类成功',
      data
    })
  },

  // 通过id获取分类
  async getItem(ctx) {
    let { id } = ctx.params
    const data = await Category.findById(id)
    ctx.send({
      code: 1,
      message: '获取分类成功',
      data
    })
  },

  // 通过id删除分类
  async delItem(ctx) {
    const { id } = ctx.params
    const data = await Category.findByIdAndRemove(id)
    ctx.send({
      code: 1,
      message: '删除分类成功',
      data
    })
  },

  // 更新分类
  async putItem(ctx) {
    const { id } = ctx.params
    const req = ctx.request.body
    await Category.findByIdAndUpdate(id, {
      ...req
    })
    ctx.send({
      code: 1,
      message: '更新分类成功'
    })
  }
}
