import { SuccessInterceptor } from './../common/interceptors/success.intercepter';
import { CatsService } from './cats.service';
import {
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Delete,
  HttpException,
  HttpStatus,
  UseFilters,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';

// 클래스 전역에서 예외 필터를 적용
@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}
  // cats
  @Get()
  // GET, /cats endpoint로 들어왔을 때에만 해당하는 필터
  // @UseFilters(HttpExceptionFilter)
  getAllCat() {
    // throw new HttpException('api is fuckin broken', 401);
    return { cats: 'get all cat' };
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param) {
    console.log('hello controller'); // interceptor의 before, after를 확인하기 위한 로그
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return ' update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete service';
  }
}
