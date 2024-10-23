import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UserCredentials } from './dto/user-credentials.dto';
import { UserAuthRepository } from 'src/database/repositories/user-auth.repository';
import { genSalt, hash } from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private userAuthRepository: UserAuthRepository) {}

    login() {}

    async signUp({ email, password }: UserCredentials) {
        try {
            const saltRound = 10;
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
