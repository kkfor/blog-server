import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException
} from '@nestjs/common'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()
    const status = (exception.getStatus && exception.getStatus()) || 500
    const message = exception.message;

    response.status(status).json({
      message: message,
      date: new Date().toLocaleDateString(),
      path: request.url
    })
  }
}
