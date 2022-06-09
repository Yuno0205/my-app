const e = require('express');
const mongoose = require('mongoose');
const CategoryModel = require('../models/CategorySchema')
module.exports = {
    createCategory: async (req, res, next) => {
        /**
         * b': validation dữ liệu
         * b0: lấy được dữ liệu post vào
         * b1: gọi model category
         * b2: gọi func save
         * b3: trả về dữ liệu
         */
        try {
            const body = req.body;
            console.log("Body" , body)
            const newCat = new CategoryModel(body)
            const isCreated = await newCat.save()
            console.log("Created :" , isCreated)
            return res.json(isCreated);

        } catch (error) {
          return  res.status(400).send("Unable to get create category , error :", error)
        }


    },

    getListCategories: async (req, res, next) => {
        try {
            const data = await CategoryModel.find()
            return res.status(200).json({data})
        } catch (error) {
            res.send("Unable to get lists of category , error :", error)
        }
    },


    getDetailsCategory: async (req, res, next) => {
        try {
            const { id } = req.params
            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.json({ message: 'ID is not exits , please check again !' })
                return false;
            } else {
                const result = await CategoryModel.findOne({ _id: id });
                return res.json(result)
            }

        } catch (error) {

            return res.json({ message: 'Unable to get details of category , error :' + error })

        }
    },


    updateCategory: async (req, res, next) => {
        try {
            const { id } = req.params
            const body = req.body

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.json({ message: 'ID is not exits , please check again !' })
                return false;
            } else {
                const isUpdate = await CategoryModel.findOneAndUpdate({ _id: id }, body)
                const data = await CategoryModel.findOne({ _id: id })
                return res.json(data)
            }


        } catch (error) {
            res.status(400).json({ message: "Unable to update category , cause by :" + error })
            // console.log("Unable to update category , error :" ,error)

        }
    },


    removeCategory: async (req, res, next) => {
        try {
            const { id } = req.params

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.json({ message: 'ID is not exits , please check again !' })
                return false;
            } else {
                const isDelete = await CategoryModel.deleteOne({ _id: id })
                return res.json({ message: 'Congratulation ! Category deleted !' })
            }

        } catch (error) {
            res.send("Unable to delete infomation about category , error :", error)

        }
    }


}
