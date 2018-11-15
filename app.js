const Koa = require('koa')
const app = new Koa()
const db = require('./mongodb/db')
const router = require('./router')
const middleWare = require('./middleware')

middleWare(app)
router(app)

app.listen('4000', function() {
  console.log('listen: 4000')
})