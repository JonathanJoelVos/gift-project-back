import { UniqueEntityId } from '@/core/entities/unique-entity-id';
import { GiftList } from '@/domain/gifts/enterprise/entities/gift-list';
import { GiftList as PrismaGiftList, Prisma } from '@prisma/client';

export class PrismaGiftListMapper {
  static toDomain(raw: PrismaGiftList): GiftList {
    return GiftList.create(
      {
        name: raw.name,
        ownerId: new UniqueEntityId(raw.ownerId),
      },
      new UniqueEntityId(raw.id),
    );
  }

  static toPrisma(giftList: GiftList): Prisma.GiftListUncheckedCreateInput {
    return {
      id: giftList.id.toString(),
      name: giftList.name,
      ownerId: giftList.ownerId.toString(),
    };
  }
}
