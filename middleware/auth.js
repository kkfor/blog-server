const authIsVerified = require('../utils/auth')

module.exports = () => {
  return async(ctx, next) => {
    // OPTIONS
    if (ctx.request.method === 'OPTIONS') {
      ctx.status = 200
      return
    }

    let isLogin = false
    let url = [
      '/api/user/login',
      '/api/user/register',
      '/api/comment'
    ]
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
      ctx.status = 401
      ctx.send({code: 0, message: '登录过期，请重新登录'})
      return
    }
    await next()
  } 
}