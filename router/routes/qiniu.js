const qiniu = require('../../controller/qiniu')

module.exports = router => {
  // 用户登录
  router.get('/qiniu', qiniu.getToken)
}