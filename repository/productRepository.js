const Product = require('../model/product');

class ProductRepository {
  async find(query) {
    return await Product.find(query);
  }

  async findOne(query) {
    return await Product.findOne(query);
  }
}

module.exports = ProductRepository;