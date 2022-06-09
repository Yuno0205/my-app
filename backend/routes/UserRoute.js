const express = require('express')
const {resgister, getList,getListUsers, getDetail, update ,remove, login} = require('../controllers/UserController')


const userRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */

userRoute.get('/', (req, res, next) => {
  getList(req , res , next)
})

userRoute.get('/listusers', (req, res, next) => {
  getListUsers(req , res , next)
})

userRoute.get('/:id', (req, res, next) => {
    getDetail(req ,res , next)
})
// router đăng ký
userRoute.post('/resgister', (req, res, next) => {
  resgister(req,res,next)
})


userRoute.post('/login', (req, res, next) => {
 login(req,res,next)
})

userRoute.put('/:id', (req, res, next) => {
   update(req, res ,next)
})

userRoute.delete('/:id', (req, res, next) => {
  remove(res , req , next)
})


module.exports = userRoute