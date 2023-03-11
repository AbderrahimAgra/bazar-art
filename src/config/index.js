require('dotenv').config({ path: '.env' })

module.exports = {
  port: Number(process.env.PORT),
  secret: process.env.JWT_SECRET,
  sgKEY: process.env.SENDGRID_API_KEY,
  emailTo: process.env.emailTo,
  emailForm: process.env.emailFrom,
}
