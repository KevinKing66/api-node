class ProductService {
  constructor(productRepository){
    this.productRepository = productRepository;
  }
  async getInStockProducts() {
    return await this.productRepository.find({ inStock: true });
  }
}

module.exports = ProductService;