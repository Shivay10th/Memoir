import { ApiProperty } from '@nestjs/swagger';

import { SuccessMessages } from '@/core/constants';

export class SuccessResponseDto<T = any> {
    @ApiProperty({ example: true })
    success: true;

    @ApiProperty({ example: SuccessMessages.REQUEST_SUCCESSFUL })
    message: string;

    @ApiProperty({ nullable: true, default: null })
    data: T | null;

    @ApiProperty({ example: new Date().toISOString() })
    timeStamp: string;
}
