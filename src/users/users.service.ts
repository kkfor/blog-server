import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.interface'
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(user: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(user)
    return await createdUser.save()
  }

  async findOne(user: CreateUserDto): Promise<User> {
    return await this.userModel.findOne(user.username)
  }
}
