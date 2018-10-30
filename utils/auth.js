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
  let status
  if (token) {
    jwt.verify(token, secret, function(err, decoded) {
      if (decoded && decoded.exp > Math.floor(Date.now() / 1000)) {
        status = true
      }
    })
  } else {
    status = false
  }
  return status
}

module.exports = authIsVerified