import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CategoryService } from './category.service'
import { CategoryDto } from './dto/category.dto'

@UseGuards(AuthGuard('jwt'))
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  async postOne(@Body() category: CategoryDto) {
    return await this.categoryService.postOne(category)
  }
}
