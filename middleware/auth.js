const authIsVerified = require('../utils/auth')

module.exports = () => {
  return async(ctx, next) => {
    const allowedOrigins = ['']
    const origin = ctx.request.headers.origin || ''
    if (allowedOrigins.includes(origin) || origin.includes('localhost')) {
      ctx.set('Access-Control-Allow-Origin', origin)
    }
  
    ctx.set({
      'Access-Control-Allow-Headers': 'Authorization, Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
      'Access-Control-Max-Age': '1728000',
      'Content-Type': 'application/jsoncharset=utf-8'
    })

    // OPTIONS
    if (ctx.request.method === 'OPTIONS') {
      ctx.status = 200
      return
    }

    const isLogin = Object.is(ctx.request.url, '/user/login') && Object.is(ctx.request.method, 'POST')

    if (isLogin) {
      await next()
      return
    }
    if (!authIsVerified(ctx.request) && !Object.is(ctx.request.method, 'GET')) {
      ctx.send({code: 0, message: 'token验证错误'})
      return false
    }
    await next()
  } 
}