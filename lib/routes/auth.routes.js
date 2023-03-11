const passport = require('passport')
const express = require('express')
const authRouter = express.Router()

const {
  auth_signup,
  auth_login,
  auth_logout,
  auth_password_reset,
  auth_password_verify,
} = require('@controllers/auth.controller.js')
require('@middleware/passport')

const requireAuth = passport.authenticate('jwt', {
  session: false,
  // successRedirect: '/customer/product',
  // failureRedirect: '/auth/login',
})
const requireSignIn = passport.authenticate('local', {
  session: false,
  // successRedirect: '/customer/product',
  // failureRedirect: '/auth/login',
})

// auth
authRouter.post('/login', requireSignIn, auth_login)
authRouter.post('/signup', auth_signup)
authRouter.get('/user', requireAuth, (req, res) => {
  res.send({ user: req.user })
})
authRouter.post('/logout', auth_logout)
authRouter.post('/password/reset', auth_password_reset)
// authRouter.post('/password/verify', auth_password_verify)

module.exports = authRouter
