export enum ErrorCodes {
    INTERNAL_ERROR = 'INTERNAL_ERROR',
}

export const ErrorMessages = {
    [ErrorCodes.INTERNAL_ERROR]: 'Internal Server Error',
} as const;
