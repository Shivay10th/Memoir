import { ErrorCodes, ErrorMessages } from '@/core/constants';
import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
    @ApiProperty({ example: false })
    success: false;

    @ApiProperty({ example: ErrorMessages[ErrorCodes.INTERNAL_ERROR] })
    message: string;

    @ApiProperty({ example: ErrorCodes.INTERNAL_ERROR, enum: ErrorCodes })
    errorCode: ErrorCodes;

    @ApiProperty({ example: new Date().toISOString() })
    timeStamp: string;
}
