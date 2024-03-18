import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/user.dto';
import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) { }

  //Registration for user
  async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;

    const user = {
      name,
      email,
      password,
    };

    return {
      user,
      message: 'User registered Successfully',
    };
  }

  //Login method
  async Login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = {
      email,
      password,
    };

    return {
      user,
      message: 'Login Successful',
    };
  }

  async getUsers() {
    return this.prisma.user
  }
}
