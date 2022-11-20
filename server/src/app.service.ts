import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('USERS') private users: ClientProxy,
    @Inject('ORDERS') private orders: ClientProxy,
  ) {}

  getUsers() {
    return this.users.send({ cmd: 'get-users' }, {});
  }

  getOrders() {
    return this.orders.send({ cmd: 'get-orders' }, {});
  }

  createUser(data) {
    return this.users.send({ cmd: 'create-user' }, data);
  }

  createOrder(data) {
    return this.orders.send({ cmd: 'create-order' }, data);
  }
}
