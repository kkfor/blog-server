import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtStrategy } from './jwt.strategy'
import { LocalStrategy } from './local.strategy'
import { jwtConfig } from './jwt.config'
import { UserModule } from '../user/user.module'

@Module({
  imports: [
    UserModule,
    // 建立jsonwebtoken时的相关信息
    JwtModule.register({
      secret: jwtConfig.secret,
      // signOption可以在JwtModule设定
      // 或是在createToken时候设定
      signOptions: {
        expiresIn: jwtConfig.expiration
      }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
