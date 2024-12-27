import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { GiftListRepository } from '@/domain/gifts/application/repositories/gift-list-repository';
import { PrismaGiftListRepository } from './prisma/repositories/prisma-gift-list-repository';

@Module({
  providers: [
    PrismaService,

    {
      provide: GiftListRepository,
      useClass: PrismaGiftListRepository,
    },
  ],
  exports: [PrismaService, GiftListRepository],
})
export class DatabaseModule {}
