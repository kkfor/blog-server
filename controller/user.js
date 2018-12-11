const User = require('../models/user')
const jwt = require('jsonwebtoken')
const secret = require('../app.config').secret

module.exports = {
  register: async (ctx, next) => {
    const { username, password, email } = ctx.request.body

    const userExisted = await User.findOne({ username })
    if (!!userExisted) {
      ctx.send({ code: 0, message: '用户已存在' })
    } else {
      const result = await User.create({
        username,
        password,
        email
      })
      ctx.send({ code: 1, message: '注册成功', result: result })
    }
  },

  login: async (ctx) => {
    const { username, password } = ctx.request.body
    const user = await User.findOne({ username, password })
    if (!!user) {
      // 生成token
      const token = jwt.sign(
        {
          id: user._id,
          username
        },
        secret,
        {
          expiresIn: '4h'
        }
      )
      ctx.send({ code: 1, message: '登录成功', result: token })
    } else {
      ctx.send({ code: 0, message: '用户名或密码错误' })
    }
  }
}