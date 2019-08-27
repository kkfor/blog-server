import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ArticleService } from './article.service'
import { ArticleDto } from './dto/article.dto'

@UseGuards(AuthGuard('jwt'))
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('/create')
  async create(@Body() article: ArticleDto) {
    const createdArticle = await this.articleService.create(article)
    return createdArticle
  }
}
