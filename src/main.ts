import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    require('express-session')({
      secret: 'chatbot-secret',
      resave: false,
      saveUninitialized: true,
    }),
  );
  await app.listen(3000);
  console.log('Chatbot server running on http://localhost:3000');
}
bootstrap();
