const articleModel = require('../models/article')

module.exports = {
  // 获取文章列表
  getArts: async (ctx) => {
    const {
      currentPage = 1,
      pageSize = 10,
      publish = true
    } = ctx.query

    const query = {
      publish
    }
    const options = {
      limit: pageSize,
      sort: {createdDate: -1},
      page: currentPage
    }

    const arts = await articleModel.paginate(query, options)

    ctx.send({
      code: 1,
      message: '查询文章列表成功',
      data: arts
    })
  },

  // 获取文章详情
  getArt: async (ctx, next) => {
    let { id} = ctx.params
    const data = await articleModel.findById(id)
    if(data.publish) {
      await articleModel.findByIdAndUpdate(id, {views: data.views + 1})
      ctx.send({code: 1, message: '查询文章成功', data})
    } else {
      ctx.send({code: 0, message: '查询文章失败，没有权限'})
    }
  },

  // 添加文章
  postArt: async (ctx, next) => {
    const {title, content, classify, publish} = ctx.request.body
    const result = await articleModel.create({
      title,
      content,
      classify,
      publish
    })
    if (result !== null) {
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
  patchArt: async (ctx) => {
    const { id } = ctx.params
    const req = ctx.request.body
    console.log(req)
    const result = await articleModel.findByIdAndUpdate(id, {
      ...req
    })
    ctx.send({code: 1, message: '更新文章成功'})
  }
}