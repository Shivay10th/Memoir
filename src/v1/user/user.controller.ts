import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { SuccessMessages } from '@/core/constants';
import { UserAvailabilityDto } from './dto/user-availability-response.dto';
import { ApiSuccessResponse } from '@/core/decorators';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiSuccessResponse(UserAvailabilityDto, {
        messageExample: SuccessMessages.USER_NAME_AVAILABLE,
    })
    @Get('/availability')
    async checkUserNameAvailability(@Query('username') userName: string) {
        const isUserNameAvailable =
            await this.userService.checkUserNameAvailability(userName);

        return {
            message: isUserNameAvailable
                ? SuccessMessages.USER_NAME_AVAILABLE
                : SuccessMessages.USER_NAME_NOT_AVAILABLE,
            data: { isUserNameAvailable },
        };
    }
}
