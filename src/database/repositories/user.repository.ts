import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../../v1/auth/dto';

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userAuthRepository: Repository<User>,
    ) {}
    async getUserCred(email: string) {
        return await this.userAuthRepository.findOne({ where: { email } });
    }
    async getUserByUserName(userName: string) {
        return await this.userAuthRepository.findOne({ where: { userName } });
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
