import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { JwtTokenModel } from './jwt-model.interface';

const bcrypt = require('bcrypt')

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtTokenService: JwtService) { }

    async validateUserCredentials(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (!user)
            return null;
        const hash = await bcrypt.hash(password, user.salt);
        if (user && user.passwordHash === hash) {
            const { passwordHash, salt, ...result } = user;
            return result;
        }
        return null;
    }

    async validateUsername(jwtTokenModel: JwtTokenModel): Promise<any> {
        const user = await this.usersService.findOne(jwtTokenModel.email);
        if (user) {
            const { passwordHash, salt, ...result } = user;
            return result;
        }
        else null;
    }

    async loginWithCredentials(user: any) {
        const payload = { username: user.username, email: user.email, sub: user._id };
        console.log(payload);
        return {
            accessToken: this.jwtTokenService.sign(payload),
        };
    }
}