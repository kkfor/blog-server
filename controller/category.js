const CategoryModel = require('../models/category')

module.exports = {
  // 添加分类
  async addCategory(ctx) {
    const { title, value } = ctx.request.body
    await CategoryModel.create({title, value})
    ctx.send({
      code: 1,
      message: '增加分类成功'
    })
  },

  // 获取全部分类
  async getClassifies(ctx) {
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
  async patchCategory(ctx) {
    const { id } = ctx.params
    const req = ctx.request.body
    const res = await CategoryModel.findByIdAndUpdate(id, {
      ...req
    })
    ctx.send({
      code: 1,
      message: '更新分类成功'
    })
  }
}
