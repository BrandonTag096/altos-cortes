import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  createProduct(createProductDto: CreateProductDto) {
    return this.productRepository.createProducts(createProductDto);
  }

  getProducts() {
    return this.productRepository.getProducts();
  }
}
