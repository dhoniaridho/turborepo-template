import { Global, Module } from '@nestjs/common';
import * as Modules from './app';
import { ConfigModule } from './config';

const modules = Object.entries(Modules)
  .filter(([key]) => key.match(/Module$/g))
  .map(([, mod]) => mod);

@Global()
@Module({
  imports: [ConfigModule, ...modules],
})
export class AppModule {}
