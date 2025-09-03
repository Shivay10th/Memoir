import {
    HttpCode,
    Injectable,
    InternalServerErrorException,
    UnauthorizedException,
} from '@nestjs/common';
import { UserRepository } from '@/database/repositories/user.repository';
import { genSalt, hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, LoginUserDto } from './dto';
import { AppHttpException } from '@/core/exceptions/app.exception';
import { ErrorCodes } from '@/core/constants/error-codes.enum';
@Injectable()
export class AuthService {
    constructor(
        private userAuthRepository: UserRepository,
        private jwtService: JwtService,
    ) {}

    async login({ email, password }: LoginUserDto) {
        const userCred = await this.userAuthRepository.getUserCred(email);
        if (!userCred) {
            throw new AppHttpException(ErrorCodes.AUTH_INVALID_CREDENTIALS);
        }

        if (await compare(password, userCred.password)) {
            const accessToken = await this.jwtService.signAsync({
                userId: userCred.id,
                email: userCred.email,
            });
            return { accessToken };
        }
        throw new AppHttpException(ErrorCodes.AUTH_INVALID_CREDENTIALS);
    }

    async signUp({ email, password, userName }: CreateUserDto) {
        try {
            const saltRound = Number(process.env.SALT_ROUND);
            const salt = await genSalt(saltRound);
            const hash_password = await hash(password, salt);
            await this.userAuthRepository.createUser({
                email,
                userName,
                password: hash_password,
            });
            return {
                message: 'User added successfully!',
            };
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
