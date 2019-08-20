import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { MongooseModule } from '@nestjs/mongoose'
import { UserSchema } from './schemas/user.schema'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
      secret: 'fsd',
      // signOption可以在JwtModule设定
      // 或是在createToken时候设定
      signOptions: {
        // expiresIn: 3600,
        issuer: 'https://www.kkfor.com'
      }
    }),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
