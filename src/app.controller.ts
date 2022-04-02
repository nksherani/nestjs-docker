import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LoginDto } from './login.dto';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService, private userService: UsersService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('api/account/token')
  async login(@Body() payload: LoginDto) {
    const user = await this.userService.findOne(payload.email);
    return this.authService.loginWithCredentials(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('test')
  async test() {
    return process.env;
  }
}
