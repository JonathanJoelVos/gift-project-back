import { CreateGiftCardUseCase } from '@/domain/gifts/application/use-cases/create-gift-list';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';

@Controller('/gift-list')
export class CreateGiftListController {
  constructor(private createGiftListUseCase: CreateGiftCardUseCase) {}
  @Post()
  async handle(@Body() body) {
    const { name, ownerId } = body;

    const result = await this.createGiftListUseCase.execute({
      name,
      ownerId,
    });

    if (result.isLeft()) {
      throw new BadRequestException(result.value.message);
    }
  }
}
