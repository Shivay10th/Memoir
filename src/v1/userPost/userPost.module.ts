import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPostController } from './userPost.controller';
import { UserPostService } from './userPost.service';
import { UserRepository, UserPostRepository } from '@/database/repositories';
import { User, UserPost } from '@/database';

@Module({
    imports: [TypeOrmModule.forFeature([UserPost, User])],
    controllers: [UserPostController],
    providers: [UserPostService, UserPostRepository, UserRepository],
})
export class UserPostModule {}
