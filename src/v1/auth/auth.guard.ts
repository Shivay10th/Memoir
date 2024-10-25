import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const req = context.switchToHttp().getRequest();
            const token = this.extractToken(req);
            if (!token) {
                throw new UnauthorizedException();
            }
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_TOKEN,
            });

            req['user'] = payload;
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }

    extractToken(req: Request): string | undefined {
        const [type, token] = req.headers.authorization.split(' ');
        return type === 'Bearer' ? token : undefined;
    }
}
