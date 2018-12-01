const request = require('request')
const config = require('../app.config')

const queryIp = (ip = '113.87.188.238') => {
  return new Promise((resolve, reject) => {
    request({
      headers: {'Authorization': `APPCODE ${config.ip}`},
      url: `https://api01.aliyun.venuscn.com/ip?ip=${ip}`
    }, (err, response, body) => {
      const result = JSON.parse(body)
      if(result.ret === 200) {
        resolve(result.data)
      } else {
        reject(result.msg)
      }
    })
  })
}

module.exports = queryIp