import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Entities from '../../../database/index';
const DB_TYPE = 'postgres';

export const DB_CONFIG: TypeOrmModuleOptions = {
    type: DB_TYPE,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    schema: process.env.POSTGRES_SCHEMA,
    entities: Entities,
    synchronize: false,
};
