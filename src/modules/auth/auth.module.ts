import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtStrategy } from './jwt.strategy'
import { jwtConfig } from './jwt.config'

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
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
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
