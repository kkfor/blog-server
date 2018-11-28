const Comment = require('../models/comment')
const authIsVerified = require('../utils/auth')

module.exports = {
  // 获取评论
  async getList(ctx) {
    const req = ctx.request
    const { article, limit = 30, page = 1 } = ctx.query

    const auth = authIsVerified(req)
    // 无权限访问或没有article
    if (!auth && !article) {
      ctx.send({
        code: 0,
        message: '缺少文章id'
      })
      return
    }
    const query = {}
    const options = {
      id: -1
    }

    // 前台访问
    if (article) {
      query.article = article
    }

    const list = await Comment
      .find(query)
      .sort(options)
      .skip(limit * (page - 1))
      .limit(limit)
    const total = await Comment.countDocuments(query)
    const pages = Math.ceil(total / limit) || 1

    const data = {
      list,
      limit,
      page,
      pages,
      total
    }
    ctx.send({
      code: 1,
      message: '获取评论列表成功',
      data
    })
  },

  // 新增评论
  async postItem(ctx) {
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

    const data = await Comment.create({
      ...ctx.request.body
      // ua,
      // ip
    })

    if (!!data) {
      ctx.send({ code: 1, message: '新增评论成功', data })
    } else {
      ctx.send({ code: 0, message: '新增评论失败' })
    }
  },

  // 修改评论状态
  async putItem(ctx) {
    const { id } = ctx.params
    const req = ctx.request.body
    const data = Comment.findByIdAndUpdate(id, req)
  },

  // 删除评论
  async delItem(ctx) {
    const { id } = ctx.params
    const data = await Comment.findByIdAndRemove(id)
    ctx.send({
      code: 1,
      message: '删除评论成功',
      data
    })
  }
}