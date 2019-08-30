import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { jwtConfig } from './jwt.config'
import { UserService } from '../user/user.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  async login(username: string, pwd: string) {
    const user = await this.userService.findOne(username)
    if (user && user.password === pwd) {
      // 将使用者资讯加密
      const token = this.jwtService.sign({username}, {
        // 过期时间
        expiresIn: jwtConfig.expiration
        // algorithm:'RS256', // default是HMAC SHA256，也可以指定別的
      })

      return {
        expiration: jwtConfig.expiration,
        token
      }
    }

    throw new UnauthorizedException();
  }
}
