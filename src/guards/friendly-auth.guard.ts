import { AuthGuard } from '@nestjs/passport';
import { UnauthorizedException, Injectable } from '@nestjs/common';

@Injectable()
export class FriendlyJwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context) {
    return super.canActivate(context);
  }

  /**
   * @function handleRequest
   * @description 如果 Token 不存在或 Token 存在并有效，都是通行
   */
  handleRequest(err, authInfo, info) {
    const okToken = !!authInfo;
    const noToken = !authInfo && info && info.message === 'No auth token';
    if (!err && (okToken || noToken)) {
      return authInfo;
    } else {
      throw err || new UnauthorizedException();
    }
  }
}