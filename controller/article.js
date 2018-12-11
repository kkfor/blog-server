const Article = require('../models/article')
const Category = require('../models/category')
const authIsVerified = require('../utils/auth')

module.exports = {
  // 获取文章列表
  async getList(ctx) {
    const {
      page = 1,
      limit = 10,
      publish,
      category,
      hot
    } = ctx.query

    const options = {
      id: -1
    }
    const query = {
    }

    if (publish) {
      query.publish = publish
    }

    if (category) {
      const c = await Category.findOne({ url: category })
      query.category = c._id
    }

    if (hot) {
      options.comments = -1
      options.views = -1
    }


    const data = await Article
      .find(query)
      .sort(options)
      .skip(limit * (page - 1))
      .limit(limit)
      .populate('category', 'slug')
    const total = await Article.countDocuments(query)
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
      message: '查询文章列表成功',
      result
    })
  },

  // 获取文章详情
  async getItem(ctx) {
    const req = ctx.request
    const { id } = ctx.params
    const result = await Article.findById(id)
    const auth = authIsVerified(req)
    if (!auth) {
      result.meta.views++
      result.save()
    }
    ctx.send({
      code: 1,
      message: '查询文章成功',
      result
    })
  },

  // 添加文章
  async postArt(ctx) {
    const { title, content, category, publish } = ctx.request.body
    const result = await Article.create({
      title,
      content,
      category,
      publish
    })
    if (!!result) {
      ctx.send({ code: 1, message: '添加文章成功', result })
    } else {
      ctx.send({ code: 0, message: '添加文章失败' })
    }
  },

  // 删除文章
  async deleteArt(ctx) {
    const { id } = ctx.params
    await Article.findByIdAndRemove(id)
    ctx.send({ code: 1, message: '删除文章成功' })
  },

  // 修改文章
  async putArt(ctx) {
    const { id } = ctx.params
    const req = ctx.request.body
    const updatedAt = Date.now()
    await Article.findByIdAndUpdate(id, {
      updatedAt,
      ...req
    })
    ctx.send({ code: 1, message: '更新文章成功' })
  }
}