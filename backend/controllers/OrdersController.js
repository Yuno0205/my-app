const OrderModel =  require('../models/OrdersSchema')
module.exports = {
  create: async (req, res, next) => {
    /**
     * b': validation dữ liệu
     * b0: lấy được dữ liệu post vào
     * b1: gọi model category
     * b2: gọi func save
     * b3: trả về dữ liệu
     */
    /** send email 
     */
    const body = req.body;
    const newOrder = new OrderModel(body)
    const isCreated = await newOrder.save()
    return res.json(isCreated);
  },
  getList: async (req, res, next) => {
    try {
      const data = await OrderModel.find()
      return res.json(data)
    } catch (error) {
      throw error
    }
  },
  getOrdersByCus: async (req, res, next) => {
    try {
      const {id} = req.params
      console.log("ID" , id)
      const result = await OrderModel.find({customer: id})
      return res.json(result)
    } catch (error) {
      return res.status(400).json({message: 'Cant find list orders'})
    }
  },
  getDetails: async (req, res, next) => {
    try {
      const {id} = req.params
      const result = await OrderModel.find({_id: id})
      return res.json(result)
    } catch (error) {
      return res.status(400).json({message: 'Error'})
    }
  },

  update: async (req, res, next) => {
    try {
      const {id} = req.params
      const body = req.body;
      const isUpdate = await OrderModel.findOneAndUpdate({_id: id},body)
      return res.json({ message: 'update success'})
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  },
  remove: async (req, res, next) => {
    try {
      const {id} = req.params
      const isDelete = await OrderModel.deleteOne({_id: id})
      return res.json({ message: 'delete success'})
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  }
}
