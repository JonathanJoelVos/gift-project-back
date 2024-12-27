import { GiftListRepository } from '@/domain/gifts/application/repositories/gift-list-repository';
import { GiftList } from '@/domain/gifts/enterprise/entities/gift-list';

export class InMemoryGiftListsRepository implements GiftListRepository {
  public items: GiftList[] = [];

  async create(GiftList: GiftList) {
    this.items.push(GiftList);
  }

  async findUserGiftListByName(
    userId: string,
    name: string,
  ): Promise<null | GiftList> {
    const giftList = this.items
      .filter((item) => item.ownerId.toString() === userId)
      .find((item) => item.name === name);

    if (!giftList) {
      return null;
    }

    return giftList;
  }
}
