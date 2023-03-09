import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    console.log('Blah Blah');
    console.log('Before, Before, Before,');

    // 여기서 map의 인자는 Res값임, controller가 먼저 실행되기 때문에 controller에서 return 한 값
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      })),
    );
  }
}
