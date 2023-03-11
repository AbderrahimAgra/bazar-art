const sgMail = require('@sendgrid/mail')
const { userToken } = require('@utils/token.js')
const db = require('@utils/db.js')
const { sgKEY, emailTo, emailFrom } = require('@config/index')
const auth_login = async (req, res) => {
  jwtToken = userToken(req.user)
  res.setHeader('Authorization', jwtToken)
  res.status(200).send({ token: jwtToken })
}
const auth_logout = async (req, res) => {
  req.logout()
  res.status(200).send('done')
}

const auth_signup = async (req, res) => {
  const { name, email, password, phone, role } = req.body
  if (!email || !password) {
    return res.status(400).send({ error: 'Please full all fields and try again' })
  }
  const checkExistingUser = await db.users.findFirst({
    where: {
      email: email,
    },
  })
  if (checkExistingUser) {
    return res.status(400).send({ error: 'you fucker this is not your email...' })
  }
  try {
    const user = await db.users
      .create({
        data: {
          name,
          email,
          password,
          phone,
          role,
        },
      })
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await db.$disconnect()
      })
    console.log(user)
    return res.json({ token: userToken(user) })
  } catch (error) {
    console.error(error)
  }
}
const auth_password_reset = async (req, res) => {
  sgMail.setApiKey(sgKEY)
  const { email } = req.body

  const msg = {
    to: emailTo,
    from: emailFrom,
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
}
// if (!email) return res.status(400).send({ error: 'Please enter your emailand try again' })

// const checkEmail = await db.users.findFirst({
//   where: {
//     email: email,
//   },
// })
// if (!checkEmail)
//   return res
//     .status(400)
//     .send({ error: 'if this email is exists in our database will rest ur password' })
module.exports = { auth_signup, auth_login, auth_logout, auth_password_reset }
