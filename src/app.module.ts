import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module'
import { ArticleModule } from './modules/article/article.module'
import { CategoryModule } from './modules/category/category.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test', { useNewUrlParser: true }),
    UserModule,
    AuthModule,
    ArticleModule,
    CategoryModule
  ]
})

export class AppModule { }
