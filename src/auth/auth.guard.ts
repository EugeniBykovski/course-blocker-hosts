import { JwtService } from '@nestjs/jwt';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CookieService } from './cookie.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest() as Request;
    const token = req.cookies[CookieService.tokenKey];

    if (!token) throw new UnauthorizedException();

    try {
      const sessionInformation = this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      req['session'] = sessionInformation;
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }
}
