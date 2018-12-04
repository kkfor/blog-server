const user = require('../../controller/user')

module.exports = router => {
  // 用户注册
  // router.post('/user/register', user.register)
  // 用户登录
  router.post('/user/login', user.login)
}