const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    
  },
  discount: {
    type:Number,
  },
});


module.exports = mongoose.model("Foods", foodSchema);
