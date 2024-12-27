import { GiftListRepository } from '@/domain/gifts/application/repositories/gift-list-repository';
import { GiftList } from '@/domain/gifts/enterprise/entities/gift-list';
import { PrismaService } from '../prisma.service';
import { PrismaGiftListMapper } from '../mappers/prisma-gift-list-mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaGiftListRepository implements GiftListRepository {
  constructor(private prisma: PrismaService) {}
  async create(giftList: GiftList): Promise<void> {
    await this.prisma.giftList.create({
      data: PrismaGiftListMapper.toPrisma(giftList),
    });
  }

  async findUserGiftListByName(
    userId: string,
    name: string,
  ): Promise<null | GiftList> {
    const giftList = await this.prisma.giftList.findFirst({
      where: {
        name,
        ownerId: userId,
      },
    });

    if (!giftList) {
      return null;
    }

    return PrismaGiftListMapper.toDomain(giftList);
  }
}
