const Comment = require('../models/comment')
const Article = require('../models/article')
const authIsVerified = require('../utils/auth')
const queryIp = require('../utils/ip')
const sendMail = require('../utils/email')
const config = require('../app.config')

// 更新文章评论数量
const updateArticleCommentCount = async (article) => {
  const res = await Comment.aggregate([
    { $match: { state: 1, article } }
  ])
  const re = await Article.findByIdAndUpdate(article, {
    'meta.comments': res.length
  })
}

// 发送邮件
const sendMainTo = async (comment) => {
  const content = comment.content
  const commentType = isReply => isReply ? '回复' : ''
  const sendMailText = isReply => `来自 ${comment.user.name} 的留言${commentType(isReply)}：${content}`
  const sendMailHtml = isReply => `
      <p>
      来自 ${comment.user.name} 的留言${commentType(isReply)}：${content}<br/>
      <a href="${config.app.url}/article/${comment.article}" target="_blank">[ 点击查看 ]</a>
      </p>
    `
  sendMail({
    to: config.email.admin,
    subject: `博客有新留言`,
    text: sendMailText(false),
    html: sendMailHtml(false)
  })
  if (comment.pid) {
    const res = await Comment.findById(comment.pid)
    sendMail({
      to: res.user.email,
      subject: `你在 ${config.app.name} 有新的留言回复`,
      text: sendMailText(true),
      html: sendMailHtml(true)
    })
  }
}

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
    const data = await Comment
      .find(query)
      .sort(options)
      .skip(limit * (page - 1))
      .limit(limit)
      .populate({
        path: 'article',
        select: 'title _id'
      })
    const total = await Comment.countDocuments(query)
    const pages = Math.ceil(total / limit) || 1

    const result = {
      data,
      limit,
      page,
      pages,
      total
    }
    ctx.send({
      code: 1,
      message: '获取评论列表成功',
      result
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

    const obj = req.body
    try {
      obj.meta.ip = ip
      const ipInfo = await queryIp(ip)
      obj.meta.location = {
        country: ipInfo.country,
        province: ipInfo.province,
        city: ipInfo.city
      }
    } catch (err) {
      console.log(err, ip)
    }

    const result = await Comment.create(obj)

    if (!!result) {
      sendMainTo(result)
      updateArticleCommentCount(result.article)
      ctx.send({ code: 1, message: '新增评论成功', result })
    } else {
      ctx.send({ code: 0, message: '新增评论失败' })
    }
  },

  // 修改评论状态
  async putItem(ctx) {
    const { id } = ctx.params
    const req = ctx.request.body
    const result = await Comment.findByIdAndUpdate(id, req)
    updateArticleCommentCount(result.article)
  },

  // 删除评论
  async delItem(ctx) {
    const { id } = ctx.params
    const result = await Comment.findByIdAndRemove(id)
    updateArticleCommentCount(result.article)
    ctx.send({
      code: 1,
      message: '删除评论成功',
      result
    })
  }
}