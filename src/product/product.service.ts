import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  CreateProductResponse,
  DeleteProductResponse,
  ProductInterface,
  UpdateProductResponse,
} from '../interface/product-interface';
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

  async findAll(): Promise<ProductInterface[]> {
    return await Product.find();
  }

  async findOne(id: string): Promise<ProductInterface> {
    return await Product.findOne({
      where: {
        id,
      },
      relations: {
        productArea: true,
        productPlace: true,
      },
    });
  }

  async update(
    updateProductReq: UpdateProductDto,
  ): Promise<UpdateProductResponse> {
    const { id, measure, count, name } = updateProductReq;
    const itemToUpdate = await Product.findOne({
      where: {
        id,
      },
    });
    if (
      !itemToUpdate ||
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
    itemToUpdate.name = updateProductReq.name;
    itemToUpdate.count = updateProductReq.count;
    itemToUpdate.measure = updateProductReq.measure;
    await itemToUpdate.save();
    return {
      id: itemToUpdate.id,
      isSuccess: true,
    };
  }

  async remove(id: string): Promise<DeleteProductResponse> {
    const itemToDelete = await Product.findOne({
      where: {
        id,
      },
    });
    if (!itemToDelete) {
      return { isSuccess: false };
    }
    await Product.remove(itemToDelete);
    return { isSuccess: true };
  }
}
