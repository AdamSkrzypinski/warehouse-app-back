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
import { PlaceEntity } from '../location/entities/place.entity';
import { AreaEntity } from '../location/entities/area.entity';

@Injectable()
export class ProductService {
  async create(
    newProductReq: CreateProductDto,
  ): Promise<CreateProductResponse> {
    const { name, measure, count } = newProductReq;
    if (
      name === '' ||
      name.length < 3 ||
      name.length > 70 ||
      typeof name !== 'string' ||
      measure === '' ||
      typeof measure !== 'string' ||
      measure.length < 2 ||
      measure.length > 15 ||
      count < 0 ||
      count > 9999999
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
    console.log(updateProductReq);
    const { id, measure, count, name, productAreaId, productPlaceId } =
      updateProductReq;
    const itemToUpdate = await Product.findOne({
      where: {
        id,
      },
      relations: {
        productArea: true,
        productPlace: true,
      },
    });

    if (
      !itemToUpdate ||
      name === '' ||
      name.length < 3 ||
      typeof name !== 'string' ||
      measure === '' ||
      typeof measure !== 'string' ||
      count < 0 ||
      !productAreaId ||
      !productPlaceId
    ) {
      return {
        isSuccess: false,
      };
    }
    itemToUpdate.name = name;
    itemToUpdate.count = count;
    itemToUpdate.measure = measure;
    itemToUpdate.productPlace = await PlaceEntity.findOne({
      where: {
        id: productPlaceId,
      },
    });
    itemToUpdate.productArea = await AreaEntity.findOne({
      where: {
        id: productAreaId,
      },
    });
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
