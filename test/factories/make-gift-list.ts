import { UniqueEntityId } from '@/core/entities/unique-entity-id';
import {
  GiftList,
  GiftListProps,
} from '@/domain/gifts/enterprise/entities/gift-list';
import { faker } from '@faker-js/faker';

export function makeGiftList(
  override: Partial<GiftListProps>,
  id?: UniqueEntityId,
) {
  return GiftList.create(
    {
      name: faker.animal.bear(),
      ownerId: new UniqueEntityId(),
      ...override,
    },
    id,
  );
}
