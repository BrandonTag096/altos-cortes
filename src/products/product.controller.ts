import { ApiTags } from '@nestjs/swagger';
import { ProductService } from './product.service';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Get,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('products')
@Controller({
  path: 'products',
  version: '1',
})
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/')
  async createProduct(@Body() createProductDto: CreateProductDto) {
    try {
      const product = await this.productService.createProduct(createProductDto);
      return {
        menssage: 'producto registrado exitosamente.',
        product,
      };
    } catch (error) {
      if (error.code === 1100) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }

  @Get('/')
  async getProducts() {
    return this.productService.getProducts();
  }
}
