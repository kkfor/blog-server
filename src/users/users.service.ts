import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.interface'
import { UserDto } from './dto/user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async create(user: UserDto): Promise<User> {
    const createdUser = new this.userModel(user)
    return await createdUser.save()
  }
}
