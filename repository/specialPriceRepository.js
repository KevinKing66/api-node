const SpecialPrice = require('../model/specialPrice');

class SpecialPriceRepository {
  async findOne(query) {
    return await SpecialPrice.findOne(query);
  }
}

module.exports = SpecialPriceRepository;