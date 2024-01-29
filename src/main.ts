import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { config } from './config/config';
import helmet from 'helmet';
import { GlobalExceptionFilter } from './filters/global-exception.filter';

async function bootstrap() {
  const port = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.setGlobalPrefix('warehousev2');

  app.use(helmet());
  app.use(cookieParser());
  app.useGlobalFilters(new GlobalExceptionFilter());

  app.enableCors({
    origin: config.corsOrigin,
  });

  await app.listen(port);
}

bootstrap();
