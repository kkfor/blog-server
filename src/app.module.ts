import { Module, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module'
import { ArticleModule } from './modules/article/article.module'
import { CategoryModule } from './modules/category/category.module'
import { TagModule } from './modules/tag/tag.module'
import { DbUrl } from './app.config'

@Module({
  imports: [
    MongooseModule.forRoot(DbUrl, { useNewUrlParser: true }),
    UserModule,
    AuthModule,
    ArticleModule,
    CategoryModule,
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
