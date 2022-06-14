const ProductModel = require('../models/ProductSchema')
const mongoose = require('mongoose');

module.exports = {

  createProduct : async (req, res, next) => {
    /**
     * b': validation dữ liệu
     * b0: lấy được dữ liệu post vào
     * b1: gọi model product
     * b2: gọi func save
     * b3: trả về dữ liệu
     */
    try {
        const body = req.body;
        console.log("Body :" , body)
        const newProduct = new ProductModel(body)
        const isCreated = await newProduct.save()
        return res.json(isCreated);
    } catch (error) {
        res.send("Unable to get create product , error :", error)
    }


},

  getListProducts: async (req, res, next) => {
    try {
      const { keyword, categoryList, limit = 8, page = 1 } = req.query
      const conditions = {}

      if (keyword) {
        conditions.name = { $regex: '.*' + keyword + '.*' ,$options: 'i'}
      }

      if(categoryList) {
        conditions.category = { $in : categoryList.split(',')  }
      }
      const data = await ProductModel.find(conditions)
      .populate('category', '-__v')
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createAt: -1 })
      const total = await ProductModel.count(conditions)
      
      return res.json({
        data: data,
        totalPage: Math.round(total / limit),
        
      })
     
    } catch (error) {
      throw error
    }

    

    // try {
    //   const { keyword, categoryList, limit = 2, page = 1 } = req.query
    //   const conditions = {}
    //   if (keyword) {
    //     conditions.name = { $regex: '.*' + keyword + '.*' }
    //   }
    //   if(categoryList) {
    //     conditions.category = { $in : categoryList.split(',')  }
    //   }
    //   const data = await ProductModel.find(conditions).populate('category', '-__v')
    //   return res.json(data)
    // } catch (error) {
    //   throw error
    // }

  },

  getHotProducts: async (req, res, next) => {
    try {
      const { keyword, categoryList, limit = 4, hotpage = 1 } = req.query
      const conditions = {discount: { $gte: 20  },discount: { $lte: 50 } }

      if (keyword) {
        conditions.name = { $regex: '.*' + keyword + '.*' ,$options: 'i'}
      }

      if(categoryList) {
        conditions.category = { $in : categoryList.split(',')  }
      }
      const data = await ProductModel.find(conditions)
      .populate('category', '-__v')
      .skip((hotpage - 1) * limit)
      .limit(limit)
      .sort({ createAt: -1 })
      const total = await ProductModel.count(conditions)
      
      return res.json({
        data: data,
        totalPage: Math.round(total / limit),
        
      })
     
    } catch (error) {
      throw error
    }

  },
  
  getFlashProducts: async (req, res, next) => {
    try {
      const { keyword, categoryList, limit = 8, page = 1 } = req.query
      const conditions = {discount: { $gte: 50  } }

      if (keyword) {
        conditions.name = { $regex: '.*' + keyword + '.*' ,$options: 'i'}
      }

      if(categoryList) {
        conditions.category = { $in : categoryList.split(',')  }
      }
      const data = await ProductModel.find(conditions)
      .populate('category', '-__v')
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createAt: -1 })
      const total = await ProductModel.count(conditions)
      
      return res.json({
        data: data,
        totalPage: Math.round(total / limit),
        
      })
     
    } catch (error) {
      throw error
    }

  },

  getDetail: async (req, res, next) => {
    try {
      const { id } = req.params
      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.json({ message: 'ID is not exits , please check again !' })
        return false;
      } else {
        const result = await ProductModel.findOne({ _id: id });
        return res.json(result)
      }
    } catch (error) {
      return res.json({ message: 'Unable to get details of user , error :' + error })
    }
  },

  getProductByCate: async (req, res, next) => {
    try {
      const { id} = req.params
       console.log("ID Category:" , id) 
        const result = await ProductModel.find({ category : id });
        return res.json(result)
      
    } catch (error) {
      return res.json({ message: 'Unable to get product by cate , error :' + error })
    }
  },



  updateProduct : async (req, res) => {
    try {
      const { id } = req.params
      const body = req.body

      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.json({ message: 'ID is not exits , please check again !' })
        return false;
      } else {
        const isUpdate = await ProductModel.findOneAndUpdate({ _id: id }, body)
        const data = await ProductModel.findOne({ _id: id })
        return res.json(data)
      }

    } catch (error) {
      console.log("Updated failed !")
      console.log(error)
    }
  },


  removeProduct : async (req, res, next) => {
    try {
      const { id } = req.params

      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.json({ message: 'ID is not exits , please check again !' })
        return false;
      } else {
        const isDelete = await ProductModel.deleteOne({ _id: id })
        return res.json({ message: 'Delete success with ID ' + id })
      }

    } catch (error) {
      console.log("error :", error)
      return res.json({ message: 'Delete failed' })

    }
  }
}
