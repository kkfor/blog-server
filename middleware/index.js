const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const koaJwt = require('koa-jwt')
const config = require('../config')
const send = require('./send')
const auth = require('./auth')
const json = require('koa-json')

module.exports = app => {
  app.use(bodyParser())
  app.use(send())
  app.use(auth())
  app.use(json())
  app.use(cors({
    origin: '*',
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH']
  }))
  // app.use(koaJwt({secret}).unless({path: [
  //   /^\/article/,
  //   /^\/user/
  // ]}))
}