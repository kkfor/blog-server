import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Article } from './article.interface'
import { ArticleDto } from './dto/article.dto'

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>
  ) {}

  async create(user: ArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(user)
    return await createdArticle.save()
  }
}
