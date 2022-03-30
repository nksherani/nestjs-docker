import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        usernameField: 'username',
        secretOrKey: jwtConstants.secret
    })
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('validate')
    const user = await this.authService.validateUserCredentials(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}