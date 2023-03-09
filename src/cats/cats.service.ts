import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hiCatServiceProduct() {
    return 'Halo C.A.T.S Service';
  }
}
