const env = process.env.NODE_ENV || 'development'

module.exports = {
  app: {
    name: 'kkfor博客',
    url: 'http://kkfor.com'
  },
  // ip key
  ip: '',
  // email信息
  email: {
    account: 'wangyaqi.chn@foxmail.com',
    password: '',
    from: '"kkfor" <wangyaqi.chn@foxmail.com>',
    admin: 'wangyaqi.chn@foxmail.com'
  },
  // session秘钥
  secret: ''
}

// 数据库配置
const dbConfig = {
  development: {
    name: 'kkfor',
    host: 'localhost',
    port: 27017,
    user: '',
    pwd: '',
  },
  production: {
    name: '',
    host: '',
    port: 27017,
    user: '',
    pwd: '',
  }
}

module.exports.db = dbConfig[env]