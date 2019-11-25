import { Body, Controller, Post, Get, Put, Delete, Param, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { MenuService } from './menu.service'
import { MenuDto } from './dto/menu.dto'

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async postOne(@Body() menu: MenuDto) {
    return await this.menuService.postOne(menu)
  }

  @Get()
  async getList() {
    return await this.menuService.getList()
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return await this.menuService.getOne(id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async putOne(@Param('id') id: string, @Body() req: any) {
    return await this.menuService.putOne(id, req)
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    return await this.menuService.deleteOne(id)
  }

}
