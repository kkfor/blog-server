import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CategoryService } from './category.service'
import { CategoryDto } from './dto/category.dto'

@UseGuards(AuthGuard('jwt'))
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  async create(@Body() category: CategoryDto) {
    const createdCategory = await this.categoryService.create(category)
    return createdCategory
  }
}
