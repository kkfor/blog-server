module.exports = () => {
  return async(ctx, next) => {
    const allowedOrigins = ['http://kkfor.com']
    const origin = ctx.request.headers.origin || ''
    if(!origin) return
    if (allowedOrigins.includes(origin) || origin.includes('localhost')) {
      ctx.set('Access-Control-Allow-Origin', origin)
    }
  
    ctx.set({
      'Access-Control-Allow-Headers': 'Authorization, Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
      'Access-Control-Max-Age': '1728000',
      'Content-Type': 'application/jsoncharset=utf-8',
      'Access-Control-Allow-Credentials': true
    })
    await next()
  }
}