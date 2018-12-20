const bodyParser = require('koa-bodyparser')
const send = require('./send')
const header = require('./header')
const auth = require('./auth')

module.exports = app => {
  app.use(bodyParser())
  app.use(send())
  app.use(header())
  app.use(auth())
}
