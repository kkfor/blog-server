import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Menu } from './menu.interface'
import { MenuDto } from './dto/menu.dto'

@Injectable()
export class MenuService {
  constructor(
    @InjectModel('Menu') private readonly menuModel: Model<Menu>
  ) {}

  async postOne(menu: MenuDto): Promise<Menu> {
    const createdMenu = new this.menuModel(menu)
    return await createdMenu.save()
  }

  async getOne(id: string): Promise<Menu> {
    return await this.menuModel.findById(id)
  }

  async getList(): Promise<Menu[]> {
    return await this.menuModel.find()
  }

  async putOne(id: string, req): Promise<Menu> {
    return this.menuModel.findByIdAndUpdate(id, req)
  }

  async deleteOne(id: string): Promise<Menu> {
    return this.menuModel.findByIdAndDelete(id)
  }
}
