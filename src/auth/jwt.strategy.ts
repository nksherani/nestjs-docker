import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtTokenModel } from './jwt-model.interface';



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      usernameField: 'email',
      secretOrKey: process.env.JWT_SECRET
    })
  }

  async validate(jwtTokenModel: JwtTokenModel): Promise<any> {
    console.log(jwtTokenModel)
    const user = await this.authService.validateUsername(jwtTokenModel);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}