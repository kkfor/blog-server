const Image = require('../models/image')

module.exports = {
  async postItem(ctx) {
    const result = await Image.create(ctx.request.body)
    ctx.send({
      code: 1,
      result,
      message: '添加图片成功'
    })
  }
}