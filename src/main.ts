import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  const port = await process.env.PORT ? Number(process.env.PORT) : 8080;
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port,
    }
  })
  await app.listen();
  console.log(`Microservice is listening on port ${port}`);
}
bootstrap();
