import { Module } from '@nestjs/common';
import { SqlCoreModule } from './core/database/postgres/sql.module';
import { AuthModule } from './v1/auth/auth.module';
import { UserPostModule } from './v1/userPost/userPost.module';
import { UserModule } from './v1/user/user.module';

@Module({
    imports: [SqlCoreModule, AuthModule, UserPostModule, UserModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
