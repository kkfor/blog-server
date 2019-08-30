import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Category } from './category.interface'
import { CategoryDto } from './dto/category.dto'

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>
  ) {}

  async postOne(category: CategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(category)
    return await createdCategory.save()
  }

  async getOne(id: string): Promise<Category> {
    return await this.categoryModel.findById(id)
  }

  async getList(): Promise<Category[]> {
    return await this.categoryModel.find()
  }

  async putOne(id: string, req): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(id, req)
  }

  async deleteOne(id: string): Promise<Category> {
    return this.categoryModel.findByIdAndDelete(id)
  }
}
