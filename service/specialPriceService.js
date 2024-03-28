const SpecialPriceRepository = require('../repository/specialPriceRepository');
const specialPriceRepository = new SpecialPriceRepository();

class SpecialPriceService {
  async getSpecialPrice(userId, brand) {
    return await specialPriceRepository.findOne({ userId, brand });
  }
}

module.exports = SpecialPriceService;
