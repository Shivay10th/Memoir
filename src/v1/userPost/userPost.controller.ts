import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { UserPostService } from './userPost.service';
import { CreateUserPost } from './dto/createPost.dto';
import { AuthGuard } from '../auth/auth.guard';
import { GetCurrentUser } from 'src/core/decorators/get-current-user.decorator';
import { CurrentUser } from 'src/core/types';
@Controller('article')
export class UserPostController {
    constructor(private userPostService: UserPostService) {}
    @Post('/')
    @UseGuards(AuthGuard)
    createPost(
        @GetCurrentUser('email') email: string,
        @Body() createPostDto: CreateUserPost,
    ) {
        return this.userPostService.createPost(createPostDto, email);
    }
}
