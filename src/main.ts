/* eslint-disable @typescript-eslint/no-var-requires */
import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      skipNullProperties: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('ALTOS CORTES')
    .setDescription('')
    .setVersion('1.0')
    .addServer(process.env.SERVER_URL)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors();
  await app.listen(process.env.APP_PORT, process.env.APP_HOSTNAME);
}
bootstrap();
