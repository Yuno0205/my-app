const express = require('express')
const {create, getList, getDetails, update, remove, getOrdersByCus } = require('../controllers/OrdersController')

const OrdersRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */
OrdersRoute.get('/ordersdetail/:id', (req, res, next) => {
  getOrdersByCus(req, res, next)
})
OrdersRoute.get('/', (req, res, next) => {
  getList(req, res, next)
})

OrdersRoute.get('/:id', (req, res, next) => {
  getDetails(req, res, next )
})
OrdersRoute.post('/', (req, res, next) => {
  create(req, res, next)
})

OrdersRoute.put('/:id', (req, res, next) => {
  update(req, res, next)
})

OrdersRoute.delete('/:id', (req, res, next) => {
  remove(req, res, next)
})


module.exports =OrdersRoute