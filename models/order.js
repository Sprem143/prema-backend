const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  date:String
});

module.exports = mongoose.model('Order', orderSchema);
