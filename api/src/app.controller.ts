import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get()
  @ApiOkResponse({
    description: 'Returns an object representing the API status',
    example: { status: 'Ok' },
  })
  healthCheck(): { status: 'Ok' } {
    return { status: 'Ok' };
  }
}
