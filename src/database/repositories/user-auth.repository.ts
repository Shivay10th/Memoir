import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAuth } from '../user-auth.entity';
import { Repository } from 'typeorm';
import { UserCredentials } from '../../v1/auth/dto/user-credentials.dto';

@Injectable()
export class UserAuthRepository {
    constructor(
        @InjectRepository(UserAuth)
        private userAuthRepository: Repository<UserAuth>,
    ) {}

    async createUser(credentials: UserCredentials) {
        try {
            const user = this.userAuthRepository.create({
                ...credentials,
            });

            await this.userAuthRepository.save(user);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
