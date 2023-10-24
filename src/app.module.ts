import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './config/config';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { LocationModule } from './location/location.module';
import { Location } from './location/entities/location.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.dbHost,
      port: 3306,
      username: config.dbUser,
      password: config.dbPassword,
      database: 'warehouse-db',
      entities: [Product, Location],
      bigNumberStrings: false,
      logging: true,
      synchronize: true,
    }),
    ProductModule,
    LocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}