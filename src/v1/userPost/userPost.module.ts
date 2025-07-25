import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuth, UserPost } from '../../database';
import { UserPostController } from './userPost.controller';
import { UserPostRepository } from 'src/database/repositories/user-post.repository';
import { UserPostService } from './userPost.service';
import { UserAuthRepository } from 'src/database/repositories/user-auth.repository';

@Module({
    imports: [TypeOrmModule.forFeature([UserPost, UserAuth])],
    controllers: [UserPostController],
    providers: [UserPostService, UserPostRepository, UserAuthRepository],
})
export class UserPostModule {}
