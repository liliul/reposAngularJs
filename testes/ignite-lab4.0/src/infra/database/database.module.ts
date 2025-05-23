// prisma.module.ts
import { Module } from '@nestjs/common';
import { NotificationRepository } from 'src/application/repositories/notification-repositories';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notification-repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,

    {
      provide: NotificationRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationRepository],
})
export class DatabaseModule {}
