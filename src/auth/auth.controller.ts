import { Controller, Post, Body, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthGuard } from '@nestjs/passport'

@UseGuards(AuthGuard('local'))
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
