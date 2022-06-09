const express = require('express')
const categoryRoute = require('./CategoryRoute')
const productRoute = require('./ProductRoute')
const userRoutes =  require('./UserRoute')
const orderRoutes =  require('./OrdersRoute')

const apiRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */
 apiRoute.use('/users', userRoutes)
 apiRoute.use('/categories', categoryRoute)
 apiRoute.use('/products',productRoute )
 apiRoute.use('/orders',orderRoutes )
 

module.exports = apiRoute