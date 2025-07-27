import { InjectRepository } from '@nestjs/typeorm';
import { UserPost } from '../user-post.entity';
import { CreateUserPost } from 'src/v1/userPost/dto/createPost.dto';
import { Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { UserRepository } from './user.repository';

export class UserPostRepository {
    constructor(
        @InjectRepository(UserPost)
        private userPostRepository: Repository<UserPost>,
        private userAuthRepository: UserRepository,
    ) {}

    async createPost(createPostDto: CreateUserPost, email: string) {
        try {
            const user = await this.userAuthRepository.getUserCred(email);
            const userPost = this.userPostRepository.create({
                ...createPostDto,
                author: user,
            });

            return await this.userPostRepository.save(userPost);
        } catch (error) {
            throw new InternalServerErrorException(error);
        }
    }
}
