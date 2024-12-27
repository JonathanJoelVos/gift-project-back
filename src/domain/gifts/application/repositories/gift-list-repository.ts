import { GiftList } from '../../enterprise/entities/gift-list';

export abstract class GiftListRepository {
  abstract create(giftList: GiftList): Promise<void>;
  abstract findUserGiftListByName(
    userId: string,
    name: string,
  ): Promise<null | GiftList>;
}
