import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly orders = [
    { orderId: 1, price: 5, quantity: 1 },
    { orderId: 1, price: 5, quantity: 1 },
    { orderId: 1, price: 5, quantity: 1 },
  ];

  constructor(@Inject('EVENT_QUEUE') private eventQueue: ClientProxy) {}

  getOrders() {
    return this.orders;
  }

  createOrder(order) {
    this.orders.push(order);
    this.eventQueue.emit('order-created', order);
    return order;
  }
}
