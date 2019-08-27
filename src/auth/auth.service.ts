import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { jwtConfig } from './jwt.config'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  async login(username: string, password: string) {
    if (username !== password) {
      const user = { username }
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

  async validateUser(username: string, pwd: string): Promise<any> {
    const user = await this.userService.findOne(username)
    if (user && user.password === pwd) {
      const { password, ...result } = user
      return result
    }
    return null
  }
}
