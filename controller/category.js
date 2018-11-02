const CategoryModel = require('../models/category')

module.exports = {
  // 添加分类
  async postCategory(ctx) {
    const { name, value } = ctx.request.body
    await CategoryModel.create({name, value})
    ctx.send({
      code: 1,
      message: '增加分类成功'
    })
  },

  // 获取全部分类
  async getCategories(ctx) {
    const data = await CategoryModel.find()

    ctx.send({
      code: 1,
      message: '获取分类成功',
      data
    })
  },

  // 通过id获取分类
  async getCategoryById(ctx) {
    let { id } = ctx.params
    const data = await CategoryModel.findById(id)
    ctx.send({
      code: 1,
      message: '获取分类成功',
      data
    })
  },

  // 通过id删除分类
  async delCategoryById(ctx) {
    const { id } = ctx.params
    const data = await CategoryModel.findByIdAndRemove(id)
    ctx.send({
      code: 1,
      message: '删除分类成功',
      data
    })
  },

  // 更新分类
  async putCategory(ctx) {
    const { id } = ctx.params
    const req = ctx.request.body
    await CategoryModel.findByIdAndUpdate(id, {
      ...req
    })
    ctx.send({
      code: 1,
      message: '更新分类成功'
    })
  }
}
