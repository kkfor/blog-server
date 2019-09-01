// const env = process.env.NODE_ENV || 'development'
const env = process.env.NODE_ENV || 'production'

export const AppConfig = {
  app: {
    name: 'kkfor博客',
    url: 'http://kkfor.com'
  },
  // ip key
  ip: '',
  // email信息
  email: {
    account: 'kkfor@foxmail.com',
    password: '',
    from: '"kkfor" <kkfor@foxmail.com>',
    admin: 'kkfor@foxmail.com'
  },
  // session秘钥
  secret: '',
  // qiniu秘钥
  qiniu: {
    accessKey: '',
    secretKey: '',
    bucket: '',
    origin: ''
  }
}

// 数据库配置
const db = {
  development: {
    uri: 'mongodb://localhost:27017/test'
  },
  production: {
    uri: ''
  }
}

export const dbConfig = db[env]