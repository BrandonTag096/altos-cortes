import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/shared/utils/module/prisma/prsima.module';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
