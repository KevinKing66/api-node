const mongoose = require('mongoose');

const SpecialPriceSchema = new mongoose.Schema({
  userId: String,
  brand: String,
  specialPrice: Number
});

module.exports = mongoose.model('SpecialPrice', SpecialPriceSchema);
