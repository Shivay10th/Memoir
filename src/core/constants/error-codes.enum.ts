import { HttpStatus } from '@nestjs/common';

export enum ErrorCodes {
    //Auth
    AUTH_INVALID_CREDENTIALS = 'AUTH_INVALID_CREDENTIALS',
    //System
    INTERNAL_ERROR = 'INTERNAL_ERROR',
}

export const ErrorMessages = {
    [ErrorCodes.INTERNAL_ERROR]: 'Internal Server Error',
    [ErrorCodes.AUTH_INVALID_CREDENTIALS]: 'Invalid email or password',
} as const;

export const ErrorStatusCodes = {
    [ErrorCodes.AUTH_INVALID_CREDENTIALS]: HttpStatus.UNAUTHORIZED,
    [ErrorCodes.INTERNAL_ERROR]: HttpStatus.INTERNAL_SERVER_ERROR,
} as const;
