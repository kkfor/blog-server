const jwt = require('jsonwebtoken')
const secret = require('../config.db').secret

const authToke = req => {
  if (req.headers && req.headers.authorization) {
    return req.headers.authorization
  }
  return false
}

const authIsVerified = req => {
  const token = authToke(req)
  if (token) {
    let status = jwt.verify(token, secret, function(err, decoded) {
      if (decoded && decoded.exp > Math.floor(Date.now() / 1000)) {
        return true
      }
      return false
    })
    return status
  }
  return false
}

module.exports = authIsVerified