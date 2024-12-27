import { Either, left, right } from '@/core/either';
import { Injectable } from '@nestjs/common';
import { GiftList } from '../../enterprise/entities/gift-list';
import { UniqueEntityId } from '@/core/entities/unique-entity-id';
import { GiftListRepository } from '../repositories/gift-list-repository';
import { AlreadyExistsError } from './errors/already-exists-error';

interface CreateGiftCardUseCaseRequest {
  name: string;
  ownerId: string;
}

type CreateGiftCardUseCaseResponse = Either<AlreadyExistsError, GiftList>;

@Injectable()
export class CreateGiftCardUseCase {
  constructor(private giftListRepository: GiftListRepository) {}

  async execute({
    ownerId,
    name,
  }: CreateGiftCardUseCaseRequest): Promise<CreateGiftCardUseCaseResponse> {
    const giftListWithSameName =
      await this.giftListRepository.findUserGiftListByName(ownerId, name);

    if (giftListWithSameName) {
      return left(new AlreadyExistsError());
    }

    const giftList = GiftList.create({
      ownerId: new UniqueEntityId(ownerId),
      name,
    });

    await this.giftListRepository.create(giftList);
    return right(giftList);
  }
}
