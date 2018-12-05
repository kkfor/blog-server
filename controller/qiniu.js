module.exports = {
  getToken(ctx) {
    ctx.send({
      code: 1,
      reuslt: 'token',
      message: 'upToken获取成功'
    })
  }
}