import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './common/filters/http-exception.filter'
import { AllowOrigins } from './app.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: AllowOrigins
  })
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(5000)
}
bootstrap()
