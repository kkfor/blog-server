import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HttpExceptionFilter } from './common/filters/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: ['http://localhost:3000', 'https://kkfor.com', 'https://admin.kkfor.com'],
    methods: "GET,HEAD,PUT,POST,DELETE",
    credentials: true
  })
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(5000)
}
bootstrap()
