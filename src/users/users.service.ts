import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './user.interface'
import { CreateUserDto } from './dto/create-user.dto'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly jwtService: JwtService
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(user)
    return await createdUser.save()
  }

  async createToken(name: string, password: string) {
    if (name !== password) {
      const user = { name }
      const expiration = 60 * 60
      // 将使用者资讯加密
      const accessToken = this.jwtService.sign(user, {
        // 关于建立token时相关参数
        // 过期时间
        expiresIn: expiration
        // algorithm:'RS256', // default是HMAC SHA256，也可以指定別的
      })

      return {
        expiration,
        accessToken
      }
    }
  }

  async findOne(username: string): Promise<User> {
    return await this.userModel.findOne(username)
  }
}
