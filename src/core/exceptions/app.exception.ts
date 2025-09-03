import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCodes } from '../constants/error-codes.enum';

export interface ExceptionResponse {
    message: string;
    errorCode: ErrorCodes;
}

export class AppHttpException extends HttpException {
    constructor(message: string, errorCode: ErrorCodes, status: HttpStatus) {
        const response: ExceptionResponse = {
            message,
            errorCode,
        };
        super(response, status);
    }
}
