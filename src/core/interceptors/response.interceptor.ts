import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { SuccessMessages } from '../constants';

export interface SuccessResponse<T = any> {
    success: boolean;
    data: T | null;
    message?: string;
    timeStamp: string;
}

@Injectable()
export class ResponseInterceptor<T>
    implements NestInterceptor<T, SuccessResponse<T>>
{
    intercept(
        context: ExecutionContext,
        _next: CallHandler<T>,
    ): Observable<SuccessResponse<T>> {
        context.switchToHttp();
        return _next.handle().pipe(
            map((result: any) => {
                return {
                    success: true,
                    message:
                        result?.message ?? SuccessMessages.REQUEST_SUCCESSFUL,
                    data: result?.data ?? null,
                    timeStamp: new Date().toISOString(),
                };
            }),
        );
    }
}
