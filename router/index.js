const Router = require('koa-router')
const user = require('./routes/user')
const article = require('./routes/article')
const category = require('./routes/category')

const router = new Router({
  prefix: '/api'
})
module.exports = app => {
  user(router)
  article(router)
  category(router)

  app.use(router.routes())
    .use(router.allowedMethods())
}