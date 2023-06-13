import { DataSource } from 'typeorm';
import { DATABASE_CONSTANT } from './database.constant';
import { env } from '../env';

export const databaseProviders = [
  {
    provide: DATABASE_CONSTANT.DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: env().database.host,
        port: env().database.port,
        username: env().database.user,
        password: env().database.password,
        database: env().database.name,
        entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
