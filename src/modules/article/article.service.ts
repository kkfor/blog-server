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
    return createdArticle.save()
  }

  async getOne(id: string) {
    return this.articleModel.findById(id)
  }

  getOneForUser(id: string) {
    return this.articleModel.findOne({_id: id, state: 1})
  }

  async putOne(id: string, req) {
    const updatedAt = Date.now()
    return this.articleModel.findByIdAndUpdate(id, {
      updatedAt,
      ...req
    })
  }

  async getList(req: any) {
    const { page = 1, limit = 10, state = 1, category } = req
    const sort = {
      id: -1
    }
    const query: any = {
      state
    }
    if (category) {
      query.category = category
    }
    const data = await this.articleModel
      .find(query)
      .sort(sort)
      .skip(limit * (page - 1))
      .limit(limit)
    const total = await this.articleModel.countDocuments(query)
    const pages = Math.ceil(total / limit) || 1
    return {
      data,
      limit,
      page,
      pages,
      total
    }
  }

  async deleteOne(id: string) {
    return this.articleModel.findByIdAndDelete(id)
  }
}
