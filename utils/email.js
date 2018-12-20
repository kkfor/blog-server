const config = require('../app.config')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.qq.com',
  secure: true,
  port: 465,
  auth: {
    user: config.email.account,
    pass: config.email.password
  }
})

const sendMail = mailOptions => {
  mailOptions.from = config.email.from
  transporter.sendMail(mailOptions, (err, res) => {
    if (err) {
      console.log('邮件发送失败', err)
    } else {
      console.log('邮件发送成功')
    }
  })
}

module.exports = sendMail
