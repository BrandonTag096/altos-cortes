import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsOptional()
  @IsString()
  productDescription?: string;

  @IsNotEmpty()
  @IsNumber()
  productPriceSale: number;

  @IsNotEmpty()
  @IsNumber()
  productPriceBuy: number;
}
