import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, productDocument } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('product') private readonly productModel: Model<productDocument>
  ) {}
  
  create(product: Product) {
    const newProduct = new this.productModel(product)
    return newProduct.save();
  }

  findAll() {
    return this.productModel.find({});
  }

  findOne(id: string) {
    return this.productModel.findById(id);
  }

  update(id: string, updateData: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateData, {new: true});
  }

  remove(id: string) {
    return this.productModel.findByIdAndRemove(id);
  }
}
