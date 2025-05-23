// app.module.ts
import { Module } from '@nestjs/common';
import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [DatabaseModule, HttpModule],
  controllers: [],
})
export class AppModule {}
