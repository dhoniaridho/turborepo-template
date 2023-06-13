import { Global, Module } from '@nestjs/common';
import { EnvModule } from './env/env.module';
import { DatabaseModule } from './database';

@Global()
@Module({
  imports: [EnvModule, DatabaseModule],
  exports: [DatabaseModule],
})
export class ConfigModule {}
