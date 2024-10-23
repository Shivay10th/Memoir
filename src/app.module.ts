import { Module } from '@nestjs/common';
import { SqlCoreModule } from './core/database/postgres/sql.module';
import { AuthModule } from './v1/auth/auth.module';

@Module({
    imports: [SqlCoreModule, AuthModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
