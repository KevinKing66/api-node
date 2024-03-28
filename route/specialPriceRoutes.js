const express = require('express');
const router = express.Router();
const SpecialPriceService = require('../service/specialPriceService');
const specialPriceService = new SpecialPriceService();

router.get('/price/:userId/:brand', async (req, res) => {
  const { userId, brand } = req.params;
  const specialPrice = await specialPriceService.getSpecialPrice(userId, brand);
  res.json({ price: specialPrice ? specialPrice.specialPrice : null });
});

module.exports = router;
