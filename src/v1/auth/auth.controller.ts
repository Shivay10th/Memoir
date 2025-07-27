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

@ApiTags('User Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    login(@Body() userCredentials: LoginUserDto) {
        return this.authService.login(userCredentials);
    }

    @Post('/signup')
    signUp(@Body() userCredentials: CreateUserDto) {
        return this.authService.signUp(userCredentials);
    }

    @Get('/profile')
    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    getProfile(@Request() req: any) {
        return req.user;
    }
}
