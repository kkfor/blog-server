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

  async postOne(user: ArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(user)
    return await createdArticle.save()
  }

  async getOne(id: string) {
    return this.articleModel.findById(id)
  }

  async putOne(id: string, req) {
    const updatedAt = Date.now()
    return this.articleModel.findByIdAndUpdate(id, {
      updatedAt,
      ...req
    })
  }

  async getList() {
    return this.articleModel.find()
  }

  async deleteOne(id: string) {
    return this.articleModel.findByIdAndDelete(id)
  }
}
