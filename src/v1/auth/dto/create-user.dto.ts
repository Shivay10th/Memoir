import { ApiProperty } from '@nestjs/swagger';
import {
    IsAlphanumeric,
    IsEmail,
    IsNotEmpty,
    IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'test@email.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ example: 'testUser' })
    @IsAlphanumeric()
    @IsNotEmpty()
    userName: string;

    @ApiProperty({
        example: 'Test@12345',
        description:
            'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
    })
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
    })
    @IsNotEmpty()
    password: string;
}
