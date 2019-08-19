import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { AuthGuard } from '@nestjs/passport'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    ) {}

    @Post()
    async create(@Body() req: CreateUserDto) {
      await this.usersService.create(req)
    }
    
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Body() req: CreateUserDto) {
    return req.username
    // return this.authService.login(req.user)
  }
}
