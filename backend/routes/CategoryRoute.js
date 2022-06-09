const express = require('express')
const { getListCategories , getDetailsCategory , createCategory , updateCategory , removeCategory } = require('../controllers/CategoryControllers')

const categoryRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */

categoryRoute.get('/', (req, res, next) => {
  getListCategories(req,res,next)
})

categoryRoute.get('/:id', (req, res, next) => {
   getDetailsCategory(req, res ,next)
})

categoryRoute.post('/', (req, res, next) => {
  createCategory(req, res, next)
})

categoryRoute.put('/:id', (req, res, next) => {
  updateCategory(req,res,next)
})

categoryRoute.delete('/:id', (req, res, next) => {
   removeCategory(req,res,next)
})


module.exports =categoryRoute