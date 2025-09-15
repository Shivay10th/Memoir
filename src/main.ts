import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppExceptionFilter } from './core/filters/app-exception.filter';
import { ResponseInterceptor } from './core/interceptors/response.interceptor';

const DEFAULT_PORT = 3000;
const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalFilters(new AppExceptionFilter());
    app.useGlobalInterceptors(new ResponseInterceptor());
    app.enableCors();

    const swaggerConfig = new DocumentBuilder()
        .setTitle('Memoir APIs')
        .setDescription('Documentation for Memoir APIs')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const documentFactory = () =>
        SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api', app, documentFactory);

    app.listen(DEFAULT_PORT);
};
bootstrap();
