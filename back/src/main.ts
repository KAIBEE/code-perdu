import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.API_PREFIX || '');
  await app.listen(3000);
}
bootstrap();
