import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductResponse } from '../interface/product-interface';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  async create(
    newProductReq: CreateProductDto,
  ): Promise<CreateProductResponse> {
    const { name, measure, count } = newProductReq;
    if (
      name === '' ||
      name.length < 3 ||
      typeof name !== 'string' ||
      measure === '' ||
      typeof measure !== 'string' ||
      typeof count !== 'number' ||
      count < 0
    ) {
      return {
        isSuccess: false,
      };
    }

    const newItem = new Product();
    newItem.name = newProductReq.name;
    newItem.count = newProductReq.count;
    newItem.measure = newProductReq.measure;
    await newItem.save();
    return {
      id: newItem.id,
      isSuccess: true,
    };
  }

  findAll() {
    return `This action returns all product`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
