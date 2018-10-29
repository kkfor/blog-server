const authIsVerified = require('../utils/auth')

module.exports = () => {
  return async(ctx, next) => {
    // OPTIONS
    if (ctx.request.method === 'OPTIONS') {
      ctx.status = 200
      return
    }

    let isLogin = false
    let url = ['/api/user/login', '/api/user/register']
    if (Object.is(ctx.request.method, 'GET')) {
      isLogin = true
    } else {
      for(let i = 0; i < url.length; i++) {
        if(Object.is(ctx.request.url, url[i])) {
          isLogin = true
        }
      }
    }

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