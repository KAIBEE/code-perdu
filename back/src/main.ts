import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.API_PREFIX || "");
  if (process.env.NODE_ENV === "development") {
    app.enableCors({
      origin: "*",
    });
  }

  await app.listen(3000);
}

bootstrap();
