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

  async create(user: CategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(user)
    return await createdCategory.save()
  }
}
