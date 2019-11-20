import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { UserDto } from './dto/user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  // @Post('/register')
  // async postOne(@Body() req: UserDto) {
  //   return await this.userService.postOne(req)
  // }
}
