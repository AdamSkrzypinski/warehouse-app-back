import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  CreateProductResponse,
  DeleteProductResponse,
  ProductInterface,
  UpdateProductResponse,
} from '../interface/product-interface';
import { AuthGuard } from '@nestjs/passport';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body() newProductReq: CreateProductDto,
  ): Promise<CreateProductResponse> {
    return this.productService.create(newProductReq);
  }

  @Get('/')
  findAll(): Promise<ProductInterface[]> {
    return this.productService.findAll();
  }

  @Get('/search/:value')
  findByName(@Param('value') value: string): Promise<ProductInterface[]> {
    return this.productService.findByName(value);
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<ProductInterface> {
    return this.productService.findOne(id);
  }

  @Patch()
  update(
    @Body() updateProductReq: UpdateProductDto,
  ): Promise<UpdateProductResponse> {
    return this.productService.update(updateProductReq);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<DeleteProductResponse> {
    return this.productService.remove(id);
  }
}
