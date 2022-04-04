import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {

  @MessagePattern({ cmd: 'sum' })
  accumulate(data?: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
}
