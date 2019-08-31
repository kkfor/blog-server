import { Module } from '@nestjs/common'
import { ArticleController } from './article.controller'
import { ArticleService } from './article.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ArticleSchema } from './schemas/article.schema'
import { CategorySchema } from '../category/schemas/category.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }, { name: 'Category', schema: CategorySchema }])
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [ArticleService]
})
export class ArticleModule {}
