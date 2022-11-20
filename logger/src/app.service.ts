import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly userLogs = [];
  private readonly orderLogs = [];

  createUsersLogs(log) {
    this.userLogs.push(log);
    console.log(log);
  }

  createOrderLogs(log) {
    this.orderLogs.push(log);
    console.log(log);
  }
}
