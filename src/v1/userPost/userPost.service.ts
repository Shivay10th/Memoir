import { Injectable } from '@nestjs/common';
import { CreateUserPost } from './dto/createPost.dto';
import { UserPostRepository } from 'src/database/repositories/user-post.repository';

@Injectable()
export class UserPostService {
    constructor(private userPostRepository: UserPostRepository) {}
    async createPost(createPostDto: CreateUserPost, email: string) {
        await this.userPostRepository.createPost(createPostDto, email);

        return {
            message: 'Article created successfully',
        };
    }
}
