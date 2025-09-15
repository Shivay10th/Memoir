import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
    Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, LoginUserDto } from './dto';
import { ApiSuccessResponse } from '@/core/decorators';
import { LoginResponseDto } from './dto/login-response.dto';
import { SuccessMessages } from '@/core/constants';

@ApiTags('User Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @ApiSuccessResponse(LoginResponseDto, {
        messageExample: SuccessMessages.LOGIN_SUCCESSFUL,
    })
    @HttpCode(HttpStatus.OK)
    @Post('/login')
    async login(@Body() userCredentials: LoginUserDto) {
        const data = await this.authService.login(userCredentials);

        return { data: data, message: SuccessMessages.LOGIN_SUCCESSFUL };
    }

    @ApiSuccessResponse(undefined, {
        statusCode: HttpStatus.CREATED,
        messageExample: SuccessMessages.USER_ADDED,
    })
    @Post('/signup')
    async signUp(@Body() userCredentials: CreateUserDto) {
        await this.authService.signUp(userCredentials);

        return { message: SuccessMessages.USER_ADDED };
    }

    @Get('/profile')
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    getProfile(@Request() req: any) {
        return req.user;
    }
}
