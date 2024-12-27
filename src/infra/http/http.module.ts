import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateGiftCardUseCase } from '@/domain/gifts/application/use-cases/create-gift-list';
import { CreateGiftListController } from './controllers/create-gift-list.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CreateGiftListController],
  providers: [CreateGiftCardUseCase],
})
export class HttpModule {}
