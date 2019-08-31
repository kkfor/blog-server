import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module'
import { ArticleModule } from './modules/article/article.module'
import { CategoryModule } from './modules/category/category.module'
import { dbConfig } from './app.config'

@Module({
  imports: [
    MongooseModule.forRoot(dbConfig.uri, { useNewUrlParser: true }),
    UserModule,
    AuthModule,
    ArticleModule,
    CategoryModule
  ]
})

export class AppModule { }
