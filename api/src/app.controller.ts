import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  healthCheck(): { status: 'Ok' } {
    return { status: 'Ok' };
  }
}
