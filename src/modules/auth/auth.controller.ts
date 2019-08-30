import { Controller, Post, Body } from '@nestjs/common'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  // 传入name及password取得jwt token
  @Post('login')
  getTokenByUserId(
    @Body('username') username: string,
    @Body('password') password: string
  ) {
    return this.authService.login(username, password)
  }
}
