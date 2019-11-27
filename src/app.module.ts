import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './modules/user/user.module'
import { AuthModule } from './modules/auth/auth.module'
import { ArticleModule } from './modules/article/article.module'
import { CategoryModule } from './modules/category/category.module'
import { MenuModule } from './modules/menu/menu.module'
import { TagModule } from './modules/tag/tag.module'
import config from './app.config'

@Module({
  imports: [
    MongooseModule.forRoot(config.DbUrl, { useNewUrlParser: true }),
    UserModule,
    AuthModule,
    ArticleModule,
    CategoryModule,
    MenuModule,
    TagModule
  ]
})

export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(CorsMiddleware)
  //     .forRoutes('*');
  // }
}
