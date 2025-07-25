import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { CurrentUser } from '../types';

export const GetCurrentUser = createParamDecorator(
    (data: keyof CurrentUser, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        if (!data) return request.user;
        return request.user[data];
    },
);
