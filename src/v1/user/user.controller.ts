import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/availability')
    async checkUserNameAvailability(@Query('username') userName: string) {
        const isAvailable = await this.userService.checkUserNameAvailability(
            userName,
        );

        return {
            message: isAvailable
                ? 'Username is available'
                : 'Username is already taken',
            value: isAvailable,
        };
    }
}
