const express = require('express')

const customerRouter = express.Router()
const {
  add_product,
  get_product_by_category,
  get_all_products,
  get_single_products,
  remove_product,
} = require('@controllers/customer.controller.js')

customerRouter.post('/product', add_product)
customerRouter.get('/product/all/:take', get_all_products)
customerRouter.get('/product/:id', get_single_products)
customerRouter.get('/product/category/:id', get_product_by_category)
customerRouter.delete('/product/:id', remove_product)

//
module.exports = customerRouter
