import { InMemoryGiftListsRepository } from 'test/repositories/in-memory-gift-list-repository';
import { CreateGiftCardUseCase } from './create-gift-list';
import { makeGiftList } from 'test/factories/make-gift-list';
import { UniqueEntityId } from '@/core/entities/unique-entity-id';

let inMemoryGiftListsRepository: InMemoryGiftListsRepository;
let sut: CreateGiftCardUseCase;

describe('Create GiftList use case', () => {
  beforeEach(() => {
    inMemoryGiftListsRepository = new InMemoryGiftListsRepository();
    sut = new CreateGiftCardUseCase(inMemoryGiftListsRepository);
  });
  it('should be able to create a gift list', async () => {
    const result = await sut.execute({
      name: 'Presente de Natal',
      ownerId: '1',
    });

    expect(result.isRight()).toBe(true);
    if (result.isRight()) {
      expect(result.value.name).toEqual('Presente de Natal');
    }
  });
  it('not should be able to create a gift list with same name in one person', async () => {
    const giftList = makeGiftList({
      name: 'Presente de Natal',
      ownerId: new UniqueEntityId('1'),
    });

    inMemoryGiftListsRepository.create(giftList);
    const result = await sut.execute({
      name: 'Presente de Natal',
      ownerId: '1',
    });

    expect(result.isLeft()).toBe(true);
  });
  it('should be able to create a gift list with same name in other persons', async () => {
    const giftList = makeGiftList({
      name: 'Presente de Natal',
      ownerId: new UniqueEntityId('2'),
    });

    inMemoryGiftListsRepository.create(giftList);
    const result = await sut.execute({
      name: 'Presente de Natal',
      ownerId: '1',
    });

    expect(result.isRight()).toBe(true);
    if (result.isRight()) {
      expect(result.value.name).toEqual('Presente de Natal');
    }
  });
});
