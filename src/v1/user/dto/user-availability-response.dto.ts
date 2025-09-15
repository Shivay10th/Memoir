import { ApiProperty } from '@nestjs/swagger';

export class UserAvailabilityDto {
    @ApiProperty({ example: true })
    isUserNameAvailable: boolean;
}
