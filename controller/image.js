const Image = require('../models/image')

module.exports = {
  async postItem(ctx) {
    const result = await Image.create(ctx.request.body)
    ctx.send({
      code: 1,
      result,
      message: '添加图片成功'
    })
  },
  async getList(ctx) {
    const { article } = ctx.request.query
    const result = await Image.find({ article })
    ctx.send({ code: 1, result, message: '获取图片列表成功' })
  }
}