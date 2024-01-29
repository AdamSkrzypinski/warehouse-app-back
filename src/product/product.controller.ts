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
import { UserObj } from '../decorators/user-obj.decorator';
import { User } from '../user/entities/user.entity';
import { HistoryService } from 'src/history/history.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private historyService: HistoryService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(
    @Body() newProductReq: CreateProductDto,
    @UserObj() user: User,
  ): Promise<CreateProductResponse> {
    console.log({ user });
    this.historyService.create({ userLogin: user.login, action: 'coś tam' });

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
