import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { UserDto } from './dto/user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post('/create')
  async postOne(@Body() req: UserDto) {
    const user = await this.userService.postOne(req)
    return user
  }
}
