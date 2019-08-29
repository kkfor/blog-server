import { Body, Controller, Post, Get, Put, Delete, Param, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { CategoryService } from './category.service'
import { CategoryDto } from './dto/category.dto'

@UseGuards(AuthGuard('jwt'))
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async postOne(@Body() category: CategoryDto) {
    return await this.categoryService.postOne(category)
  }

  @Get()
  async getList() {
    return await this.categoryService.getList()
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.categoryService.getOne(id)
  }

  @Put(':id')
  async putOne(@Param('id') id: string, @Body() req: any) {
    return await this.categoryService.putOne(id, req)
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.categoryService.deleteOne(id)
  }

}
