// app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './infra/app.controller';
import { PrismaModule } from './infra/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
})
export class AppModule {}
