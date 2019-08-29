import {
  Body,
  Controller,
  Post,
  Put,
  Get,
  Delete,
  UseGuards,
  Param,
  Query
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ArticleService } from './article.service'
import { ArticleDto } from './dto/article.dto'

@UseGuards(AuthGuard('jwt'))
@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async postOne(@Body() article: ArticleDto) {
    return await this.articleService.postOne(article)
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.articleService.getOne(id)
  }

  @Get()
  async getList(@Query() req: any) {
    return this.articleService.getList(req)
  }

  @Put(':id')
  async putOne(@Param('id') id: string, @Body() req) {
    return this.articleService.putOne(id, req)
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.articleService.deleteOne(id)
  }
}
