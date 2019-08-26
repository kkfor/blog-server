import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './dto/user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(
    private readonly UsersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/create')
  async create(@Body() req: UserDto) {
    return {
      name: 'lisi'
    }
    // await this.usersService.create(req)
  }
}
