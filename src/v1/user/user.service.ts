import { UserRepository } from '@/database/repositories/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}
    async checkUserNameAvailability(userName: string): Promise<boolean> {
        const user = await this.userRepository.getUserByUserName(userName);
        return !user;
    }
}
