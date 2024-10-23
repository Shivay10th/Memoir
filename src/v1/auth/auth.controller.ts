import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCredentials } from './dto/user-credentials.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('/login')
    login() {}

    @Post('/signup')
    signUp(@Body() userCredentials: UserCredentials) {
        return this.authService.signUp(userCredentials);
    }
}
