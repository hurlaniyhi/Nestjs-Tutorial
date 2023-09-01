import { PartialType } from '@nestjs/mapped-types';
//import { CreateProductDto } from './create-product.dto';
import { Product } from '../entities/product.entity';

export class UpdateProductDto extends PartialType(Product) {
    name: string;
    numberOfUsers: number
}
