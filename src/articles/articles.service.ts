import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Article } from './article.interface'
import { CreateArticleDto } from './dto/create-article.dto'

@Injectable()
export class ArticlesService {
  constructor(@InjectModel('Article') private readonly userModel: Model<Article>) {}

  async create(user: CreateArticleDto): Promise<Article> {
    const createdArticle = new this.userModel(user)
    return await createdArticle.save()
  } 
}
