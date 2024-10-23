import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const DEFAULT_PORT = 3000;
const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());
    console.log(process.env.POSTGRES_HOST);

    app.listen(DEFAULT_PORT);
};
bootstrap();
