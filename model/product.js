const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  inStock: Boolean,
  basePrice: Number
});

module.exports = mongoose.model('Product', ProductSchema);