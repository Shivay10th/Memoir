import { HttpException, HttpStatus } from '@nestjs/common';
import {
    ErrorCodes,
    ErrorMessages,
    ErrorStatusCodes,
} from '../constants/error-codes.enum';

export interface ExceptionResponse {
    message: string;
    errorCode: ErrorCodes;
}

export class AppHttpException extends HttpException {
    constructor(
        errorCode: ErrorCodes,
        message?: string,
        statusCode?: HttpStatus,
    ) {
        const errorMessage = message ?? ErrorMessages[errorCode];
        const errorStatusCode = statusCode ?? ErrorStatusCodes[errorCode];
        const response: ExceptionResponse = {
            message: errorMessage,
            errorCode,
        };
        super(response, errorStatusCode);
    }
}
