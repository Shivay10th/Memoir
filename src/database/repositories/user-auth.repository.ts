import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAuth } from '../user-auth.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../v1/auth/dto';

@Injectable()
export class UserAuthRepository {
    constructor(
        @InjectRepository(UserAuth)
        private userAuthRepository: Repository<UserAuth>,
    ) {}
    async getUserCred(email: string) {
        return await this.userAuthRepository.findOne({ where: { email } });
    }
    async createUser(credentials: CreateUserDto) {
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
