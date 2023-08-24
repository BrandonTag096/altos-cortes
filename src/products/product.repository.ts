import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/utils/module/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createProducts(createProductDto: CreateProductDto) {
    return this.prismaService.product.create({
      data: { ...createProductDto },
    });
  }

  getProducts() {
    return this.prismaService.product.findMany();
  }
}
