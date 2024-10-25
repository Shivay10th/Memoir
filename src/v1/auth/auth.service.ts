import {
    Injectable,
    InternalServerErrorException,
    UnauthorizedException,
} from '@nestjs/common';
import { UserCredentials } from './dto/user-credentials.dto';
import { UserAuthRepository } from 'src/database/repositories/user-auth.repository';
import { genSalt, hash, compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        private userAuthRepository: UserAuthRepository,
        private jwtService: JwtService,
    ) {}

    async login({ email, password }: UserCredentials) {
        const userCred = await this.userAuthRepository.getUserCred(email);

        if (await compare(password, userCred.password)) {
            const access_token = await this.jwtService.signAsync({ email });
            return { access_token };
        }
        throw new UnauthorizedException();
    }

    async signUp({ email, password }: UserCredentials) {
        try {
            const saltRound = Number(process.env.SALT_ROUND);
            const salt = await genSalt(saltRound);
            const hash_password = await hash(password, salt);
            await this.userAuthRepository.createUser({
                email,
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
