import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module'
import { ArticleModule } from './article/article.module'
import { CategoryModule } from './category/category.module'

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
