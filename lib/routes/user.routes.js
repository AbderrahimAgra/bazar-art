const express = require('express')
const userRouter = express.Router()
const {
  add_comment,
  edit_comment,
  contact_us,
  get_all_comment,
} = require('@controllers/user.controller.js')

userRouter.get('/comment/:id', get_all_comment)
userRouter.put('/comment', edit_comment)
userRouter.post('/comment', add_comment)
userRouter.post('/contact', contact_us)
module.exports = userRouter
