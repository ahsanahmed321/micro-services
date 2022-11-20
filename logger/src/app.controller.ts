import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('user-created')
  createUserLogs(data) {
    this.appService.createUsersLogs(data);
  }

  @EventPattern('order-created')
  createOrderLogs(data) {
    this.appService.createOrderLogs(data);
  }
}
