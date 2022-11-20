import { Controller, Get, Post, Body } from '@nestjs/common';
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

  @Post('/createUser')
  createUser(@Body() data) {
    return this.appService.createUser(data);
  }

  @Post('/createOrder')
  createOrder(@Body() data) {
    return this.appService.createOrder(data);
  }
}
