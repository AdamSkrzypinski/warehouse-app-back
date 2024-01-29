import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { HistoryModule } from 'src/history/history.module';

@Module({
  imports: [HistoryModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
