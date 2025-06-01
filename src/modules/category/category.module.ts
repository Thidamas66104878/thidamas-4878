import { Module } from '@nestjs/common';
import { CategoriesService } from './category.service';
import { CategoriesController } from './category.controller';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoryModule {}
