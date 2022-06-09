const express = require('express')
const { getListProducts, createProduct, getDetail, updateProduct, removeProduct, getProductByCate } = require('../controllers/ProductController')

const productRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */

productRoute.get('/', (req, res, next) => {
  getListProducts(req,res,next)
})

productRoute.get('/bycate/:id', (req, res, next) => {
  getProductByCate(req,res,next)
})

productRoute.get('/:id', (req, res, next) => {
   getDetail(req, res ,next)
})

productRoute.post('/', (req, res, next) => {
  createProduct(req, res ,next)
})

productRoute.put('/:id', (req, res, next) => {
  updateProduct(req,res,next)
})

productRoute.delete('/:id', (req, res, next) => {
   removeProduct(req,res,next)

})


module.exports =productRoute