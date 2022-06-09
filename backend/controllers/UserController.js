const UserModel = require('../models/UserSchema')
const mongoose = require('mongoose');

module.exports = {

  resgister: async (req, res, next) => {
    // thêm user vào
    try {
      const body = req.body
      const createUser = new UserModel(body)
      const isExits = await UserModel.findOne({ email: body.email })
     

      try {
        if (isExits == null) {
           
           await  createUser.save().then((data) => {
             console.log("Data " , data)
           return res.json({ message: 'Save user successful  !' })
  
          })
        }else{
          return res.status(500).json({ message: 'Save user failed ! Account is exist' })
        }
      } catch (error) {
        return res.status(500).json({ message: 'Save user failed ! Account is exist' })
      }
     

    } catch (error) {


      return res.json("error" + error)
    }

  },


  login: async (req, res, next) => {
    try {
      const { email, password } = req.body
      const User = await UserModel.findOne({ email: email, password: password })
      
      if (User) {
        return res.json({ message: 'Login successful !'  , User  , success : true} )
      } else {

        return res.status(400).json({ message: 'Username or Password incorect !' , success : false  })
      }
      
    } catch (error) {
      return res.status(500).json({ message: 'Server error !' + error })
    }

  },

  getList: async (req, res, next) => {
    try {
      const data = await UserModel.find().limit(10)

      return res.json(data)
      // console.log(data)

    } catch (error) {
      res.send("Error ",error)
    }

  },

  getListUsers: async (req, res, next) => {
    try {
      const data = await UserModel.find({ role:  "Users" });
      return res.json(data)
      // console.log(data)

    } catch (error) {
      res.send("Error " , error)
    }

  },

  getDetail: async (req, res, next) => {
    try {
      const { id } = req.params
      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.json({ message: 'ID is not exits , please check again !' })
        return false;
      } else {
        const result = await UserModel.findOne({ _id: id });
        return res.json(result)
      }
    } catch (error) {
      return res.json({ message: 'Unable to get details of user , error :' + error })
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params
      const body = req.body

      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.json({ message: 'ID is not exits , please check again !' })
        return false;
      } else {
        const isUpdate = await UserModel.findOneAndUpdate({ _id: id }, body)
        const data = await UserModel.findOne({ _id: id })
        return res.json(data)
      }

    } catch (error) {
      console.log("Updated failed !")
      console.log(error)
    }
  },


  remove: async (res, req, next) => {
    try {
      const { id } = req.params

      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.json({ message: 'ID is not exits , please check again !' })
        return false;
      } else {
        const isDelete = await UserModel.deleteOne({ _id: id })
        return res.json({ message: 'Delete success with ID ' + id })
      }

    } catch (error) {
      console.log("error :", error)
      return res.json({ message: 'Delete failed' })

    }
  }
}
