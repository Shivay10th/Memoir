import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserPost {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;
}
