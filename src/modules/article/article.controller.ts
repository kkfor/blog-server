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
  postOne(@Body() article: ArticleDto) {
    return this.articleService.postOne(article)
  }

  @Get(':id')
  @UseGuards(FriendlyJwtAuthGuard)
  getOne(@Param('id') id: string, @Req() request: any) {
    const auth = request.isAuthenticated()
    return auth ? this.articleService.getOne(id)
    : this.articleService.getOneForUser(id)
  }

  @Get()
  @UseGuards(FriendlyJwtAuthGuard)
  getList(@Query() req: any, @Req() request: any) {
    req.limit = req.limit && Number(req.limit)
    req.page = req.page && Number(req.page)
    const auth = request.isAuthenticated()
    if(!auth) {
      req.status = 1
      req.limit = 10
    }
    return this.articleService.getList(req)
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  putOne(@Param('id') id: string, @Body() req) {
    return this.articleService.putOne(id, req)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.articleService.deleteOne(id)
  }
}
