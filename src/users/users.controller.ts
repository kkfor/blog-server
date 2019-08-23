import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service'
import { UserDto } from './dto/user.dto'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
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
