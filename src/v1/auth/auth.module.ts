import { Module } from '@nestjs/common';
import { UserAuthRepository } from '../../database/repositories/user-auth.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAuth } from '../../database';

@Module({
    imports: [TypeOrmModule.forFeature([UserAuth])],
    controllers: [AuthController],
    providers: [AuthService, UserAuthRepository],
})
export class AuthModule {}
