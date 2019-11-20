import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Article } from './article.interface'
import { ArticleDto } from './dto/article.dto'

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
    @InjectModel('Category') private readonly categoryModel
  ) {}

  postOne(user: ArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel(user)
    return createdArticle.save()
  }

  getOne(id: string) {
    return this.articleModel.findById(id)
  }

  async getOneForUser(id: string) {
    const res: any = await this.articleModel.findOne({_id: id, status: 1})
    res.meta.views++
    res.save()
    return res
  }

  putOne(id: string, req) {
    const updatedAt = Date.now()
    return this.articleModel.findByIdAndUpdate(id, {
      updatedAt,
      ...req
    })
  }

  async getList(req: any) {
    const { page = 1, limit = 10, status, category, hot } = req
    const sort: any = {}
    if(hot) {
      sort['meta.views'] = -1
    } else {
      sort.createdAt = -1
    }

    const query: any = {}
    if(status) {
      query.status = status
    }
    if (category) {
      const c = await this.categoryModel.findOne({ slug: category })
      query.category = c._id
    }
    const data = await this.articleModel
      .find(query)
      .sort(sort)
      .populate('category')
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
