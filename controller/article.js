const articleModel = require('../models/article')
const authIsVerified = require('../utils/auth')

module.exports = {
  // 获取文章列表
  getArts: async ctx => {
    const {
      page = 1,
      limit = 10,
      publish
    } = ctx.query

    const query = publish ? {publish} : {}

    const arts = await articleModel
                                .find(query)
                                .skip(limit * (page - 1))
                                .limit(limit)
    const total = await articleModel.countDocuments(query)
    const pages = Math.ceil(total/limit) || 1
    const data = {
      arts,
      limit,
      page,
      pages,
      total
    }
    ctx.send({
      code: 1,
      message: '查询文章列表成功',
      data
    })
  },

  // 获取文章详情
  getArt: async ctx => {
    let { id } = ctx.params
    const data = await articleModel.findById(id)
    ctx.send({
      code: 1,
      message: '查询文章成功',
      data
    })
  },

  // 添加文章
  postArt: async (ctx) => {
    const {title, content, category, publish} = ctx.request.body
    const result = await articleModel.create({
      title,
      content,
      category,
      publish
    })
    if (!result) {
      ctx.send({code: 1, message: '添加文章成功', data: result})
    } else {
      ctx.send({code: 0, message: '添加文章失败'})
    }
  },

  // 删除文章
  deleteArt: async (ctx) => {
    const { id } = ctx.params
    const article = await articleModel.findByIdAndRemove(id)
    ctx.send({code: 1, message: '删除文章成功'})
  },

  // 修改文章
  putArt: async (ctx) => {
    const { id } = ctx.params
    const req = ctx.request.body
    console.log(req)
    const result = await articleModel.findByIdAndUpdate(id, {
      ...req
    })
    ctx.send({code: 1, message: '更新文章成功'})
  }
}