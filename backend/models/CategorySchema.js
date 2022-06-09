const mongoose = require('mongoose');


const { Schema } = mongoose;

const CategoriesSchema = new Schema({
  
  name: { type: String ,require : true },
  description: String
})

module.exports = mongoose.model('Categories', CategoriesSchema)