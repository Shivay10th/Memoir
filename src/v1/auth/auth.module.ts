import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserRepository } from '@/database/repositories';
import { User } from '@/database';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, UserRepository],
})
export class AuthModule {}
