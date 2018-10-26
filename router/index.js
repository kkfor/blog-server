const router = require('koa-router')()
const user = require('./routes/user')
const article = require('./routes/article')
const classify = require('./routes/classify')

module.exports = app => {
  user(router)
  article(router)
  classify(router)

  app.use(router.routes())
    .use(router.allowedMethods())
}