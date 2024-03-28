const express = require('express');
const router = express.Router();
const ProductService = require('../service/productService');
const ProductRepository = require('../repository/productRepository');
const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);

router.get('/products', async (req, res) => {
  const inStockProducts = await productService.getInStockProducts();
  res.json(inStockProducts);
});

module.exports = router;