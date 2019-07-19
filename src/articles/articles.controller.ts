import {
  Body,
  Controller,
  Post
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto'

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(@Body() article: CreateArticleDto) {
    await this.articlesService.create(article);
  }
}
