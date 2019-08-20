import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Post()
  async create(@Body() req: CreateUserDto) {
    await this.usersService.create(req)
  }

  @Post('/login')
  async getToken(
    @Body('name') name: string,
    @Body('password') password: string
  ) {
    await this.usersService.createToken(name, password)
  }
}
