import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { jwtConfig } from './jwt.config'
import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly UsersService: UsersService
  ) {}

  async login(name: string, password: string) {
    if (name !== password) {
      const user = { name }
      // 将使用者资讯加密
      const accessToken = this.jwtService.sign(user, {
        // 过期时间
        expiresIn: jwtConfig.expiration
        // algorithm:'RS256', // default是HMAC SHA256，也可以指定別的
      })

      return {
        expiration: jwtConfig.expiration,
        accessToken
      }
    }
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.UsersService.findOne(username)
    if (user && user.password === pass) {
      const { password, ...result } = user
      return result
    }
    return null
  }
}
