import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './dto/user.dto'
import { UserService } from './user.service'

// @UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('/create')
  async create(@Body() req: UserDto) {
    const user = await this.userService.create(req)
    return user
  }
}
