import { Injectable, NestMiddleware, RequestMethod, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
      return next();
  }
}
