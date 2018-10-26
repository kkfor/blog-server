const mongoose = require('mongoose')
const config = require('../config').db
const url = `mongodb://${config.user}:${config.pwd}@${config.host}:${config.port}/${config.name}`
const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500        // 500毫秒
}

mongoose.connect(url, options)

const db = mongoose.connection

db.once('open', () => console.log('数据库连接成功'))

db.on('error', (err) => {
  console.log('Error in mongodb connection', err)
  mongoose.disconnect()
})



module.exports = db