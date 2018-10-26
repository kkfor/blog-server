const ClassifyModel = require('../models/classify')

module.exports = {
  // 添加分类
  async addClassify(ctx) {
    const {title, value} = ctx.request.body
    await ClassifyModel.create({title, value})
    ctx.send({
      code: 1,
      message: '增加分类成功'
    })
  },

  // 获取全部分类
  async getClassifies(ctx) {
    const calssifies = await ClassifyModel.find()
    const total = await ClassifyModel.find().count()

    ctx.send({
      code: 1,
      message: '获取分类成功',
      data: calssifies
    })
  },

  // 通过id获取分类
  async getClassifyById(ctx) {
    let id = ctx.params.id
    const classify = await ClassifyModel.findById(id)
    ctx.send({
      code: 1,
      message: '获取分类成功',
      data: classify
    })
  },

  // 通过id删除分类
  async delClassifyById(ctx) {
    const { id } = ctx.params
    const classify = await ClassifyModel.findByIdAndRemove(id)
    ctx.send({
      code: 1,
      message: '删除分类成功',
      data: classify
    })
  },

  // 更新分类
  async patchClassify(ctx) {
    const id = ctx.params.id
    const req = ctx.request.body
    const res = await ClassifyModel.findByIdAndUpdate(id, {
      ...req
    })
    ctx.send({
      code: 1,
      message: '更新分类成功'
    })
  }
}
