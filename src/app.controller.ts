import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get('find')
  getHello(): string {
    return '234';
  }

  @Get('find')
  findAll(): string {
    return 'This action returns all cats';
  }
}
