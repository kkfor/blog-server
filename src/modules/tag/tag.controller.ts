import { Body, Controller, Post, Get, Put, Delete, Param, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { TagService } from './tag.service'
import { TagDto } from './dto/tag.dto'

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async postOne(@Body() tag: TagDto) {
    return await this.tagService.postOne(tag)
  }

  @Get()
  async getList() {
    return await this.tagService.getList()
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.tagService.getOne(id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async putOne(@Param('id') id: string, @Body() req: any) {
    return await this.tagService.putOne(id, req)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.tagService.deleteOne(id)
  }

}
