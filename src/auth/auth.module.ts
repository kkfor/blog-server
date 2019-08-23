import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { jwtConfig } from './jwt.config'

@Module({
    imports: [
        // 建立jsonwebtoken时的相关信息
        JwtModule.register({
            secret: jwtConfig.secret,
            // signOption可以在JwtModule设定
            // 或是在createToken时候设定
            signOptions: {
                expiresIn: 3600 * 60
            },
        }),
        UsersModule],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
