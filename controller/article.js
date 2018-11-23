const Article = require('../models/article')
const Category = require('../models/category')
const authIsVerified = require('../utils/auth')

module.exports = {
  // 获取文章列表
  getArts: async ctx => {
    const {
      page = 1,
      limit = 10,
      publish,
      category
    } = ctx.query

    const options = {
      id: -1
    }
    const query = {}

    if (publish) {
      query.publish = publish
    }

    if (category) {
      const c = await Category.findOne({slug: category})
      query.category = c._id
    }


    const arts = await Article
      .find(query)
      .sort(options)
      .skip(limit * (page - 1))
      .limit(limit)
    const total = await Article.countDocuments(query)
    const pages = Math.ceil(total / limit) || 1
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
    const data = await Article.findById(id)
    ctx.send({
      code: 1,
      message: '查询文章成功',
      data
    })
  },

  // 添加文章
  postArt: async (ctx) => {
    const { title, content, category, publish } = ctx.request.body
    const data = await Article.create({
      title,
      content,
      category,
      publish
    })
    if (!!data) {
      ctx.send({ code: 1, message: '添加文章成功', data })
    } else {
      ctx.send({ code: 0, message: '添加文章失败' })
    }
  },

  // 删除文章
  deleteArt: async (ctx) => {
    const { id } = ctx.params
    const article = await Article.findByIdAndRemove(id)
    ctx.send({ code: 1, message: '删除文章成功' })
  },

  // 修改文章
  putArt: async ctx => {
    const { id } = ctx.params
    const req = ctx.request.body
    const updateAt = Date.now()
    await Article.findByIdAndUpdate(id, {
      updateAt,
      ...req
    })
    ctx.send({ code: 1, message: '更新文章成功' })
  }
}