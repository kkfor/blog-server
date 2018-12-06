const qiniu = require('qn')
const config = require('../app.config')

const client = qiniu.create(config.qiniu)

module.exports = {
  getToken(ctx) {
    ctx.send({
      code: 1,
      result: client.uploadToken(),
      message: 'upToken获取成功'
    })
  }
}