import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module'
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './article/article.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/test', { useNewUrlParser: true }),
    UserModule,
    AuthModule,
    ArticleModule
  ]
})

export class AppModule { }
