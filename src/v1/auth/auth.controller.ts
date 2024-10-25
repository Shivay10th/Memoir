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
import { UserCredentials } from './dto/user-credentials.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('/login')
    login(@Body() userCredentials: UserCredentials) {
        return this.authService.login(userCredentials);
    }

    @Post('/signup')
    signUp(@Body() userCredentials: UserCredentials) {
        return this.authService.signUp(userCredentials);
    }

    @Get('/profile')
    @UseGuards(AuthGuard)
    getProfile(@Request() req: any) {
        return req.user;
    }
}
