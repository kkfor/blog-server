const Koa = require('koa')
const app = new Koa()
require('./mongodb/db')
const router = require('./router')
const middleWare = require('./middleware')

middleWare(app)
router(app)

app.listen('5000', function() {
  console.log('listen: 5000')
})
