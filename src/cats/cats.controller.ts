import { Controller, Get, Post, Body, Catch, HttpCode, Header, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { AnyExceptionFilter } from '../exception/any-exception.filter'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    
    const result = await this.catsService.create(createCatDto);
    return result
  }

  @Get()
  @Header('ccc', 'dfdfd')
  async findAll() {
    
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
