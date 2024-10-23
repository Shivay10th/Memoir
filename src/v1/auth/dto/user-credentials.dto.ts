import { IsAlphanumeric, IsEmail, IsNotEmpty } from 'class-validator';

export class UserCredentials {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    password: string;
}
