const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProductsSchema = new Schema({
  name: { type: String},
  description: String,
  price: Number,
  color : String,
  size: [String],
  images: String,
  discount : {type : Number , default: 0},
  category: { type: Schema.Types.ObjectId, ref: 'Categories' },
  createAt: { type: Date, default: Date.now() },

})

module.exports = mongoose.model('Products', ProductsSchema)