import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getUsers')
  getUsers() {
    return this.appService.getUsers();
  }

  @Get('/getOrders')
  getOrders() {
    return this.appService.getOrders();
  }
}
