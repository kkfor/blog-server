const Comment = require('../models/comment')

module.exports = {
  // 获取评论
  async getComments(ctx) {
    const { articleId } = ctx.query

    if (!articleId) {
      ctx.send({
        code: 0,
        message: '缺少文章id'
      })
      return
    }
    const query = {
      articleId
    }

    const data = await Comment.find(query)
    ctx.send({
      code: 1,
      message: '获取评论列表成功',
      data
    })
  },

  // 新增评论
  async postComment(ctx) {
    const req = ctx.request
    const ip = (req.headers['x-forwarded-for']
      || req.headers['x-real-ip']
      || (req.connection && req.connection.remoteAddress)
      || req.socket.remoteAddress
      || (req.connection && req.connection.socket.remoteAddress)
      || req.ip
      || req.ips[0]
      || ''
    ).replace('::ffff:', '')

    const { articleId, name, email, site, content, ua } = ctx.request.body

    const data = await Comment.create({
      articleId,
      name,
      email,
      site,
      content,
      // ua,
      // ip
    })

    if (!!data) {
      ctx.send({ code: 1, message: '新增评论成功', data })
    } else {
      ctx.send({ code: 0, message: '新增评论失败' })
    }

  }
}