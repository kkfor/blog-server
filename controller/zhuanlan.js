const Zhuanlan = require('../models/zhuanlan')

module.exports = {
  // 添加专栏
  async postItem(ctx) {
    const { title, content } = ctx.request.body
    const result = await Zhuanlan.create({ title, content })
    ctx.send({
      code: 1,
      message: '增加专栏成功',
      result
    })
  },

  // 获取全部专栏
  async getList(ctx) {
    const result = await Zhuanlan.find()

    ctx.send({
      code: 1,
      message: '获取分类成功',
      result
    })

    ctx.send({
      code: 1,
      message: '获取专栏成功',
      result
    })
  },

  // 通过id获取专栏
  async getItem(ctx) {
    let { id } = ctx.params
    const result = await Zhuanlan.findById(id)
    ctx.send({
      code: 1,
      message: '获取专栏成功',
      result
    })
  },

  // 通过id删除专栏
  async delItem(ctx) {
    const { id } = ctx.params
    const result = await Zhuanlan.findByIdAndRemove(id)
    ctx.send({
      code: 1,
      message: '删除专栏成功',
      result
    })
  },

  // 更新专栏
  async putItem(ctx) {
    const { id } = ctx.params
    const req = ctx.request.body
    await Zhuanlan.findByIdAndUpdate(id, {
      ...req
    })
    ctx.send({
      code: 1,
      message: '更新专栏成功'
    })
  }
}
