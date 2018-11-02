const UserModel = require('../models/user')
const jwt = require('jsonwebtoken')
const secret = require('../config.db').secret

module.exports = {
  checkUserExisted: async (ctx) => {
    const { username } = ctx.request.body

  },
  register: async (ctx, next) => {
    const {username, password} = ctx.request.body

    const userExisted = await UserModel.findOne({username})
    if (!!userExisted) {
      ctx.send({code: 0, message: '用户已存在'})
    } else {
      const result = await UserModel.create({
        username,
        password
      })
      if (result !== null) {
        ctx.send({code: 1, message: '注册成功', data: result})
      } else {
        ctx.send({code: 0, message: '注册失败'})
      }
    }
  },

  login: async (ctx) => {
    const {username, password} = ctx.request.body
    const user = await UserModel.findOne({username, password})
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
      ctx.send({code: 1, message: '登录成功', data: token})
    } else {
      ctx.send({code: 0, message: '用户名或密码错误'})
    }
  }
}