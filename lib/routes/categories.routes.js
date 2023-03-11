const express = require('express')

const categoriesRouter = express.Router()
const { get_categories, create_categories } = require('@controllers/categories.controller.js')

categoriesRouter.get('/all/:take', get_categories)
categoriesRouter.post('/create', create_categories)

module.exports = categoriesRouter
