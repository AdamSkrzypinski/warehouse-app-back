import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { config } from './config/config';

async function bootstrap() {
  const port = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('warehousev2');

  app.use(cookieParser());

  app.enableCors({
    origin: [config.corsOrigin],
  });
  await app.listen(port);
}

bootstrap();
