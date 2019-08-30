import {
  Body,
  Controller,
  Post,
  Put,
  Get,
  Delete,
  UseGuards,
  Param,
  Req,
  Query
} from '@nestjs/common'
import { JwtAuthGuard } from '../../guards'
import { FriendlyJwtAuthGuard } from '../../guards'
import { AuthGuard } from '@nestjs/passport'
import { ArticleService } from './article.service'
import { ArticleDto } from './dto/article.dto'

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async postOne(@Body() article: ArticleDto) {
    return await this.articleService.postOne(article)
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.articleService.getOne(id)
  }

  @Get()
  @UseGuards(FriendlyJwtAuthGuard)
  async getList(@Query() req: any, @Req() request: any) {
    const auth = request.isAuthenticated()
    if(!auth) {
      req.state = 1
    }
    return this.articleService.getList(req)
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async putOne(@Param('id') id: string, @Body() req) {
    return this.articleService.putOne(id, req)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.articleService.deleteOne(id)
  }
}
