const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
})

const styledEmail = text => `
  <div style="padding: 25px"; font-style: sans-serif;">
    <h2>Hello!</h2>
    <p>${text}</p>
    <p>🎨 - Artist Store</p>
  </div>
`

exports.transport = transport
exports.styledEmail = styledEmail
