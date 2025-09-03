import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorCodes, ErrorMessages } from '../constants/error-codes.enum';

@Catch(HttpException, Error)
export class AppExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException | Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp();

        const res = ctx.getResponse<Response>();

        let errorCode = ErrorCodes.INTERNAL_ERROR;
        let message: string = ErrorMessages[ErrorCodes.INTERNAL_ERROR];
        let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

        if (exception instanceof HttpException) {
            const exceptionResponse: any = exception.getResponse();
            errorCode = exceptionResponse.errorCode || errorCode;
            message = exceptionResponse.message || message;
            statusCode = exception.getStatus() || statusCode;
        } else if (exception instanceof Error) {
            message =
                process.env.NODE_ENV === 'development'
                    ? exception.message
                    : message;
        }

        res.status(statusCode).json({
            success: false,
            message,
            errorCode,
            timeStamp: new Date().toISOString(),
        });
    }
}
